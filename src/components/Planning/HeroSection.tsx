"use client";
import React, { useState } from 'react';
import { Dumbbell, Calendar, Clock, Users, ChevronRight, ArrowRight, CheckCircle, BarChart3 } from 'lucide-react';

export function HeroSection() {
    const [activeTab, setActiveTab] = useState('workoutPlans');
    return (
        <div>
            <div className="relative h-[40vh] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}>
                <div className="absolute inset-0 bg-black/60">
                <div className="container mx-auto h-full flex flex-col justify-center items-center text-white">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">PLANNING</h1>
                    <p className="text-xl text-center max-w-2xl">Organize your fitness journey with our comprehensive planning tools</p>
                </div>
                </div>
            </div>
        </div>
    )
}