'use client';

import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const particles: { x: number; y: number; radius: number; color: string; }[] = [];
        const particleCount = 100;

        const colors = ['#ff69b4', '#000000']; // Pink and Black colors

        const initParticles = () => {
            for (let i = 0; i