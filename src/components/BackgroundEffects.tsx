import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { audioEngine } from '../utils/audio';

interface BackgroundEffectsProps {
  liteMode: boolean;
  onToggleLiteMode: () => void;
  isSoundOn: boolean;
  onToggleSound: () => void;
}

export const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({
  liteMode,
  onToggleLiteMode,
  isSoundOn,
  onToggleSound
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const cursorDotRef = useRef<HTMLDivElement | null>(null);
  const cursorRingRef = useRef<HTMLDivElement | null>(null);
  const [hasMouse, setHasMouse] = useState(false);

  // Custom cursor logic
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setHasMouse(true);
      if (cursorDotRef.current && cursorRingRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        cursorRingRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onMouseDown = () => {
      cursorRingRef.current?.classList.add('cursor-active');
    };

    const onMouseUp = () => {
      cursorRingRef.current?.classList.remove('cursor-active');
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  // Three.js background scene (particles + floating geometric polyhedra)
  useEffect(() => {
    if (liteMode) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animId: number;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: window.innerWidth > 900
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x060a12, 12, 38);

    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 14);

    // Ambient & Directional Lights
    const ambientLight = new THREE.AmbientLight(0xff8a3a, 0.4);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xff6a00, 1.2);
    dirLight1.position.set(4, 7, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x17314a, 1.5);
    dirLight2.position.set(-5, -4, -2);
    scene.add(dirLight2);

    // Particle field
    const particleCount = window.innerWidth > 900 ? 240 : 100;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 36;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 36;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      // Warm amber to orange hues
      const isOrange = Math.random() > 0.4;
      colors[i * 3] = isOrange ? 1.0 : 0.4;
      colors[i * 3 + 1] = isOrange ? 0.45 : 0.6;
      colors[i * 3 + 2] = isOrange ? 0.05 : 0.9;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.16,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Floating gem polyhedra
    const gemGeo = new THREE.IcosahedronGeometry(0.7, 0);
    const gemMat = new THREE.MeshStandardMaterial({
      color: 0xff6a00,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: true,
      transparent: true,
      opacity: 0.28
    });

    const gems: THREE.Mesh[] = [];
    const gemPositions = [
      [-6, 3, 0],
      [7, -2, -3],
      [-4, -5, -2],
      [5, 4, -4],
      [0, -7, 1]
    ];

    gemPositions.forEach(([x, y, z]) => {
      const mesh = new THREE.Mesh(gemGeo, gemMat);
      mesh.position.set(x, y, z);
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      scene.add(mesh);
      gems.push(mesh);
    });

    let mouseX = 0;
    let mouseY = 0;
    const handleMouse = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 1.5;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 1.5;
    };
    window.addEventListener('mousemove', handleMouse);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    const clock = new THREE.Clock();
    const animate = () => {
      const elapsed = clock.getElapsedTime();

      particles.rotation.y = elapsed * 0.02 + mouseX * 0.2;
      particles.rotation.x = elapsed * 0.01 + mouseY * 0.2;

      gems.forEach((gem, idx) => {
        gem.rotation.x = elapsed * (0.2 + idx * 0.05);
        gem.rotation.y = elapsed * (0.3 + idx * 0.05);
        gem.position.y += Math.sin(elapsed + idx) * 0.003;
      });

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouse);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [liteMode]);

  return (
    <>
      <canvas id="gl-canvas" ref={canvasRef} aria-hidden="true" />
      <div className="grade" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />

      {/* Floating controls in top right */}
      <div className="fixed top-5 right-5 z-[80] flex items-center gap-2">
        <button
          className={`perf-toggle ${liteMode ? 'on' : ''}`}
          id="perf-toggle"
          type="button"
          aria-pressed={liteMode}
          aria-label="Toggle lite performance mode"
          title={liteMode ? 'Lite mode active — click for full effects' : 'Lite mode — calmer motion & effects'}
          onClick={onToggleLiteMode}
        >
          <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
            <path d="M13 2 4 13h6l-1 9 9-12h-6l2-8z" fill="currentColor" />
          </svg>
        </button>

        <button
          className={`sound-toggle ${isSoundOn ? 'on' : ''}`}
          id="sound-toggle"
          type="button"
          aria-pressed={isSoundOn}
          aria-label="Toggle ambient sound"
          title={isSoundOn ? 'Mute ambient sound' : 'Play ambient sound'}
          onClick={onToggleSound}
        >
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
            <path className="snd-spk" d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor" />
            <path
              className="snd-wave"
              d="M16 8.5a4.5 4.5 0 0 1 0 7M19 6a8 8 0 0 1 0 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Custom cursor elements for fine pointer display */}
      {hasMouse && !liteMode && (
        <>
          <div ref={cursorDotRef} className="cursor-dot" aria-hidden="true" />
          <div ref={cursorRingRef} className="cursor-ring" aria-hidden="true" />
        </>
      )}
    </>
  );
};
