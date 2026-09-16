class AmbientAudioEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private isPlaying = false;
  private targetGain = 0.11;

  private init() {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return false;

    this.ctx = new AudioCtx();
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.value = 0;
    this.masterGain.connect(this.ctx.destination);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 440;
    filter.Q.value = 0.6;
    filter.connect(this.masterGain);

    const freqs = [55, 82.41, 110];
    freqs.forEach((freq, idx) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      osc.type = idx === 2 ? 'triangle' : 'sine';
      osc.frequency.value = freq;
      osc.detune.value = (idx - 1) * 6;

      const oscGain = this.ctx.createGain();
      oscGain.gain.value = idx === 2 ? 0.11 : 0.19;

      osc.connect(oscGain);
      oscGain.connect(filter);
      osc.start();

      // Slow organic LFO
      const lfo = this.ctx.createOscillator();
      lfo.frequency.value = 0.05 + idx * 0.031;
      const lfoGain = this.ctx.createGain();
      lfoGain.gain.value = 0.05;
      lfo.connect(lfoGain);
      lfoGain.connect(oscGain.gain);
      lfo.start();
    });

    return true;
  }

  public toggle(forceState?: boolean): boolean {
    if (this.ctx?.state === 'suspended') {
      this.ctx.resume();
    }

    if (!this.ctx) {
      const initialized = this.init();
      if (!initialized) return false;
    }

    this.isPlaying = typeof forceState === 'boolean' ? forceState : !this.isPlaying;

    if (this.ctx && this.masterGain) {
      const now = this.ctx.currentTime;
      this.ctx.resume();
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
      this.masterGain.gain.linearRampToValueAtTime(
        this.isPlaying ? this.targetGain : 0,
        now + (this.isPlaying ? 1.2 : 0.5)
      );
    }

    return this.isPlaying;
  }

  public swell() {
    if (!this.isPlaying || !this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
    this.masterGain.gain.linearRampToValueAtTime(this.targetGain * 1.6, now + 0.3);
    this.masterGain.gain.linearRampToValueAtTime(this.targetGain, now + 1.2);
  }

  public getActive(): boolean {
    return this.isPlaying;
  }
}

export const audioEngine = new AmbientAudioEngine();
