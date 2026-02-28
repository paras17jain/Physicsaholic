/*
 * Comprehensive physics concepts data for JEE/NEET — Class 11 & 12
 * Each topic includes: title, description, key formulas, concepts, diagram SVG
 */

export interface Concept {
  id: string;
  title: string;
  chapter: string;
  classLevel: "11" | "12";
  description: string;
  keyFormulas: { formula: string; description: string }[];
  concepts: string[];
  diagramSvg: string; // SVG string for inline diagram
  difficulty: "Easy" | "Medium" | "Hard";
  weightage: "Low" | "Medium" | "High";
}

export interface QuizQuestion {
  id: string;
  conceptId: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: "Easy" | "Medium" | "Hard";
}

export interface Flashcard {
  id: string;
  conceptId: string;
  front: string;
  back: string;
  category: string;
}

// ============ CLASS 11 CONCEPTS ============

export const class11Concepts: Concept[] = [
  {
    id: "kinematics",
    title: "Kinematics",
    chapter: "Motion in a Straight Line & Plane",
    classLevel: "11",
    description: "Kinematics is the study of motion without considering the forces that cause it. It covers displacement, velocity, acceleration, and their relationships through equations of motion. Projectile motion and relative motion are key applications tested heavily in JEE and NEET.",
    keyFormulas: [
      { formula: "v = u + at", description: "First equation of motion (velocity-time)" },
      { formula: "s = ut + ½at²", description: "Second equation of motion (displacement-time)" },
      { formula: "v² = u² + 2as", description: "Third equation of motion (velocity-displacement)" },
      { formula: "R = u²sin2θ/g", description: "Range of projectile" },
      { formula: "H = u²sin²θ/2g", description: "Maximum height of projectile" },
      { formula: "T = 2usinθ/g", description: "Time of flight of projectile" },
    ],
    concepts: [
      "Distance vs Displacement — Distance is scalar (total path), displacement is vector (shortest path)",
      "Speed vs Velocity — Speed is scalar, velocity is vector with direction",
      "Uniform vs Non-uniform acceleration",
      "Projectile motion is combination of horizontal (uniform) and vertical (accelerated) motion",
      "Relative velocity: v_AB = v_A - v_B",
    ],
    diagramSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b"/></marker></defs><line x1="40" y1="160" x2="360" y2="160" stroke="#334155" stroke-width="2"/><line x1="40" y1="160" x2="40" y2="20" stroke="#334155" stroke-width="2"/><path d="M 40 160 Q 120 40 200 60 Q 280 80 340 160" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="none"/><line x1="40" y1="160" x2="100" y2="100" stroke="#06b6d4" stroke-width="1.5" marker-end="url(#ah)"/><text x="200" y="190" fill="#94a3b8" font-size="12" text-anchor="middle" font-family="monospace">Range (R)</text><text x="20" y="90" fill="#94a3b8" font-size="12" text-anchor="middle" font-family="monospace" transform="rotate(-90,20,90)">Height</text><text x="200" y="50" fill="#f59e0b" font-size="11" text-anchor="middle" font-family="monospace">Projectile Path</text><text x="85" y="118" fill="#06b6d4" font-size="10" font-family="monospace">u, θ</text><circle cx="40" cy="160" r="4" fill="#f59e0b"/><circle cx="340" cy="160" r="4" fill="#f59e0b"/></svg>`,
    difficulty: "Medium",
    weightage: "High",
  },
  {
    id: "laws-of-motion",
    title: "Laws of Motion",
    chapter: "Newton's Laws of Motion",
    classLevel: "11",
    description: "Newton's three laws of motion form the foundation of classical mechanics. This chapter covers force analysis using free body diagrams, friction (static and kinetic), and dynamics of circular motion. Mastering FBDs is essential for solving complex JEE problems.",
    keyFormulas: [
      { formula: "F = ma", description: "Newton's second law" },
      { formula: "f_s ≤ μ_s N", description: "Static friction (maximum)" },
      { formula: "f_k = μ_k N", description: "Kinetic friction" },
      { formula: "F_c = mv²/r", description: "Centripetal force" },
      { formula: "a_c = v²/r = ω²r", description: "Centripetal acceleration" },
    ],
    concepts: [
      "Newton's First Law (Inertia): A body continues in its state unless acted upon by external force",
      "Newton's Second Law: Rate of change of momentum equals applied force",
      "Newton's Third Law: Every action has equal and opposite reaction",
      "Free Body Diagrams (FBD) — isolate object, draw all forces",
      "Friction opposes relative motion; static > kinetic friction",
      "Banking of roads: tanθ = v²/rg (without friction)",
    ],
    diagramSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><rect x="140" y="80" width="80" height="60" rx="4" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/><text x="180" y="115" fill="#f59e0b" font-size="14" text-anchor="middle" font-family="monospace">m</text><line x1="220" y1="110" x2="320" y2="110" stroke="#06b6d4" stroke-width="2" marker-end="url(#ah)"/><text x="270" y="100" fill="#06b6d4" font-size="11" font-family="monospace">F = ma</text><line x1="180" y1="140" x2="180" y2="190" stroke="#ef4444" stroke-width="2" marker-end="url(#ah)"/><text x="195" y="180" fill="#ef4444" font-size="11" font-family="monospace">mg</text><line x1="180" y1="80" x2="180" y2="30" stroke="#22c55e" stroke-width="2" marker-end="url(#ah)"/><text x="195" y="45" fill="#22c55e" font-size="11" font-family="monospace">N</text><line x1="140" y1="140" x2="80" y2="140" stroke="#a855f7" stroke-width="2" marker-end="url(#ah)"/><text x="100" y="155" fill="#a855f7" font-size="11" font-family="monospace">f</text><text x="200" y="16" fill="#94a3b8" font-size="12" text-anchor="middle" font-family="monospace">Free Body Diagram</text></svg>`,
    difficulty: "Medium",
    weightage: "High",
  },
  {
    id: "work-energy-power",
    title: "Work, Energy & Power",
    chapter: "Work, Energy and Power",
    classLevel: "11",
    description: "This chapter introduces the scalar quantities of work and energy, and the work-energy theorem which connects force and motion through energy. Conservation of mechanical energy is a powerful tool for solving problems that would be complex using Newton's laws alone.",
    keyFormulas: [
      { formula: "W = F·d·cosθ", description: "Work done by a force" },
      { formula: "KE = ½mv²", description: "Kinetic energy" },
      { formula: "PE = mgh", description: "Gravitational potential energy" },
      { formula: "W_net = ΔKE", description: "Work-energy theorem" },
      { formula: "P = W/t = F·v", description: "Power" },
      { formula: "PE_spring = ½kx²", description: "Elastic potential energy" },
    ],
    concepts: [
      "Work is positive when force and displacement are in same direction",
      "Work-Energy Theorem: Net work = Change in kinetic energy",
      "Conservative forces: Work independent of path (gravity, spring)",
      "Non-conservative forces: Work depends on path (friction)",
      "Conservation of energy: KE + PE = constant (for conservative forces)",
      "Elastic collision: both momentum and KE conserved",
    ],
    diagramSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="160" x2="360" y2="160" stroke="#334155" stroke-width="2"/><line x1="40" y1="160" x2="40" y2="20" stroke="#334155" stroke-width="2"/><rect x="80" y="120" width="40" height="40" rx="3" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/><line x1="120" y1="140" x2="200" y2="140" stroke="#06b6d4" stroke-width="2" stroke-dasharray="5,3"/><rect x="200" y="120" width="40" height="40" rx="3" fill="#1e293b" stroke="#06b6d4" stroke-width="2"/><text x="100" y="145" fill="#f59e0b" font-size="10" text-anchor="middle" font-family="monospace">m</text><text x="220" y="145" fill="#06b6d4" font-size="10" text-anchor="middle" font-family="monospace">m</text><line x1="100" y1="110" x2="160" y2="70" stroke="#f59e0b" stroke-width="2" marker-end="url(#ah)"/><text x="140" y="80" fill="#f59e0b" font-size="10" font-family="monospace">F</text><text x="160" y="175" fill="#94a3b8" font-size="10" font-family="monospace">d</text><text x="300" y="60" fill="#22c55e" font-size="11" font-family="monospace">W = F·d·cosθ</text><text x="300" y="80" fill="#06b6d4" font-size="11" font-family="monospace">KE = ½mv²</text><text x="300" y="100" fill="#f59e0b" font-size="11" font-family="monospace">PE = mgh</text></svg>`,
    difficulty: "Medium",
    weightage: "High",
  },
  {
    id: "rotational-motion",
    title: "Rotational Motion",
    chapter: "System of Particles & Rotational Motion",
    classLevel: "11",
    description: "Rotational motion extends Newton's laws to rotating bodies. Understanding moment of inertia (rotational analog of mass), torque (rotational analog of force), and angular momentum is crucial. This is one of the highest-weightage chapters in both JEE and NEET.",
    keyFormulas: [
      { formula: "τ = r × F = Iα", description: "Torque equation" },
      { formula: "L = Iω", description: "Angular momentum" },
      { formula: "KE_rot = ½Iω²", description: "Rotational kinetic energy" },
      { formula: "I = Σmr²", description: "Moment of inertia" },
      { formula: "I = I_cm + Md²", description: "Parallel axis theorem" },
    ],
    concepts: [
      "Moment of inertia depends on mass distribution about axis",
      "Torque is the rotational equivalent of force",
      "Angular momentum is conserved when net external torque is zero",
      "Rolling motion = Translation + Rotation",
      "Parallel axis theorem: I = I_cm + Md²",
      "Perpendicular axis theorem (for planar bodies): Iz = Ix + Iy",
    ],
    diagramSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><circle cx="200" cy="100" r="60" fill="none" stroke="#334155" stroke-width="2"/><circle cx="200" cy="100" r="4" fill="#f59e0b"/><line x1="200" y1="100" x2="260" y2="100" stroke="#f59e0b" stroke-width="2"/><text x="230" y="95" fill="#f59e0b" font-size="10" font-family="monospace">r</text><path d="M 240 60 A 50 50 0 0 1 260 100" fill="none" stroke="#06b6d4" stroke-width="2" marker-end="url(#ah)"/><text x="265" y="70" fill="#06b6d4" font-size="11" font-family="monospace">ω</text><line x1="260" y1="100" x2="310" y2="60" stroke="#22c55e" stroke-width="2" marker-end="url(#ah)"/><text x="295" y="70" fill="#22c55e" font-size="10" font-family="monospace">v=rω</text><text x="80" y="50" fill="#94a3b8" font-size="11" font-family="monospace">τ = Iα</text><text x="80" y="70" fill="#94a3b8" font-size="11" font-family="monospace">L = Iω</text><text x="80" y="90" fill="#94a3b8" font-size="11" font-family="monospace">KE = ½Iω²</text></svg>`,
    difficulty: "Hard",
    weightage: "High",
  },
  {
    id: "gravitation",
    title: "Gravitation",
    chapter: "Gravitation",
    classLevel: "11",
    description: "Gravitation covers Newton's universal law of gravitation, Kepler's laws of planetary motion, and satellite mechanics. Understanding gravitational potential energy and escape velocity are key for both JEE and NEET. This chapter connects celestial mechanics with everyday gravity.",
    keyFormulas: [
      { formula: "F = GMm/r²", description: "Newton's law of gravitation" },
      { formula: "g = GM/R²", description: "Acceleration due to gravity" },
      { formula: "v_e = √(2gR)", description: "Escape velocity" },
      { formula: "v_o = √(gR)", description: "Orbital velocity (near surface)" },
      { formula: "T² ∝ a³", description: "Kepler's third law" },
      { formula: "U = -GMm/r", description: "Gravitational potential energy" },
    ],
    concepts: [
      "Gravitational force is always attractive and acts along the line joining centers",
      "g varies with altitude: g' = g(1 - 2h/R) for h << R",
      "g varies with depth: g' = g(1 - d/R)",
      "Escape velocity is independent of mass and direction of projection",
      "Geostationary orbit: T = 24 hours, height ≈ 36,000 km",
      "Kepler's laws: elliptical orbits, equal areas, T²∝a³",
    ],
    diagramSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><circle cx="200" cy="100" r="30" fill="#1e293b" stroke="#06b6d4" stroke-width="2"/><text x="200" y="105" fill="#06b6d4" font-size="12" text-anchor="middle" font-family="monospace">M</text><ellipse cx="200" cy="100" rx="120" ry="60" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3"/><circle cx="320" cy="100" r="8" fill="#f59e0b"/><text x="320" y="85" fill="#f59e0b" font-size="10" text-anchor="middle" font-family="monospace">m</text><line x1="230" y1="100" x2="312" y2="100" stroke="#334155" stroke-width="1" stroke-dasharray="3,3"/><text x="270" y="95" fill="#94a3b8" font-size="10" font-family="monospace">r</text><text x="60" y="30" fill="#94a3b8" font-size="11" font-family="monospace">F = GMm/r²</text><text x="60" y="50" fill="#94a3b8" font-size="11" font-family="monospace">v_e = √(2gR)</text></svg>`,
    difficulty: "Medium",
    weightage: "Medium",
  },
  {
    id: "thermodynamics",
    title: "Thermodynamics",
    chapter: "Thermodynamics",
    classLevel: "11",
    description: "Thermodynamics deals with heat, work, and internal energy of systems. The first and second laws govern energy conservation and the direction of natural processes. Understanding PV diagrams and different thermodynamic processes is essential for JEE/NEET.",
    keyFormulas: [
      { formula: "ΔU = Q - W", description: "First law of thermodynamics" },
      { formula: "η = 1 - T₂/T₁", description: "Carnot engine efficiency" },
      { formula: "PV = nRT", description: "Ideal gas equation" },
      { formula: "W = nRT ln(V₂/V₁)", description: "Work in isothermal process" },
      { formula: "PV^γ = constant", description: "Adiabatic process" },
    ],
    concepts: [
      "Zeroth law: Thermal equilibrium is transitive (basis of temperature)",
      "First law: Energy conservation — heat = internal energy change + work",
      "Second law: Heat flows from hot to cold spontaneously; entropy increases",
      "Isothermal: constant T, Adiabatic: no heat exchange (Q=0)",
      "Isobaric: constant P, Isochoric: constant V (W=0)",
      "Carnot cycle: most efficient engine between two temperatures",
    ],
    diagramSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><line x1="60" y1="170" x2="360" y2="170" stroke="#334155" stroke-width="2"/><line x1="60" y1="170" x2="60" y2="20" stroke="#334155" stroke-width="2"/><text x="210" y="195" fill="#94a3b8" font-size="12" text-anchor="middle" font-family="monospace">Volume (V)</text><text x="25" y="95" fill="#94a3b8" font-size="12" text-anchor="middle" font-family="monospace" transform="rotate(-90,25,95)">Pressure (P)</text><path d="M 100 40 Q 150 45 200 80 Q 250 115 320 120" fill="none" stroke="#f59e0b" stroke-width="2.5"/><path d="M 100 40 L 100 120 L 320 120" fill="none" stroke="#06b6d4" stroke-width="1.5" stroke-dasharray="4,3"/><text x="150" y="55" fill="#f59e0b" font-size="10" font-family="monospace">Isothermal</text><text x="80" y="85" fill="#06b6d4" font-size="10" font-family="monospace">Isochoric</text><text x="210" y="140" fill="#06b6d4" font-size="10" font-family="monospace">Isobaric</text><circle cx="100" cy="40" r="4" fill="#f59e0b"/><circle cx="320" cy="120" r="4" fill="#f59e0b"/></svg>`,
    difficulty: "Medium",
    weightage: "High",
  },
  {
    id: "oscillations",
    title: "Oscillations & SHM",
    chapter: "Oscillations",
    classLevel: "11",
    description: "Simple Harmonic Motion (SHM) is a fundamental concept that appears across mechanics, waves, and even AC circuits. Understanding the displacement, velocity, and acceleration equations, along with energy conservation in SHM, is critical for competitive exams.",
    keyFormulas: [
      { formula: "x = A sin(ωt + φ)", description: "Displacement in SHM" },
      { formula: "v = Aω cos(ωt + φ)", description: "Velocity in SHM" },
      { formula: "a = -ω²x", description: "Acceleration in SHM" },
      { formula: "T = 2π√(m/k)", description: "Time period (spring-mass)" },
      { formula: "T = 2π√(l/g)", description: "Time period (simple pendulum)" },
      { formula: "E = ½kA²", description: "Total energy in SHM" },
    ],
    concepts: [
      "SHM: acceleration is proportional to displacement and directed towards mean position",
      "At mean position: velocity is maximum, acceleration is zero",
      "At extreme position: velocity is zero, acceleration is maximum",
      "Energy oscillates between KE and PE, total energy is constant",
      "Phase difference between displacement and velocity is π/2",
      "Damped oscillations: amplitude decreases with time",
    ],
    diagramSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="100" x2="380" y2="100" stroke="#334155" stroke-width="1" stroke-dasharray="4,4"/><path d="M 40 100 Q 80 20 120 100 Q 160 180 200 100 Q 240 20 280 100 Q 320 180 360 100" fill="none" stroke="#f59e0b" stroke-width="2.5"/><text x="120" y="35" fill="#f59e0b" font-size="10" font-family="monospace">+A</text><text x="160" y="185" fill="#f59e0b" font-size="10" font-family="monospace">-A</text><line x1="40" y1="30" x2="40" y2="170" stroke="#334155" stroke-width="1"/><text x="210" y="195" fill="#94a3b8" font-size="11" text-anchor="middle" font-family="monospace">Time (t)</text><text x="25" y="100" fill="#94a3b8" font-size="11" text-anchor="middle" font-family="monospace" transform="rotate(-90,15,100)">x</text><text x="300" y="50" fill="#06b6d4" font-size="10" font-family="monospace">x = A sin(ωt)</text><text x="300" y="70" fill="#06b6d4" font-size="10" font-family="monospace">T = 2π/ω</text></svg>`,
    difficulty: "Medium",
    weightage: "Medium",
  },
  {
    id: "waves",
    title: "Waves",
    chapter: "Waves",
    classLevel: "11",
    description: "Waves transport energy without transporting matter. This chapter covers transverse and longitudinal waves, superposition principle, standing waves, beats, and the Doppler effect. Understanding harmonics in strings and pipes is frequently tested.",
    keyFormulas: [
      { formula: "v = fλ", description: "Wave speed equation" },
      { formula: "v = √(T/μ)", description: "Speed of wave on string" },
      { formula: "f_beat = |f₁ - f₂|", description: "Beat frequency" },
      { formula: "f' = f(v ± v_o)/(v ∓ v_s)", description: "Doppler effect" },
    ],
    concepts: [
      "Transverse waves: vibration perpendicular to propagation (light, string waves)",
      "Longitudinal waves: vibration parallel to propagation (sound)",
      "Superposition: resultant displacement = sum of individual displacements",
      "Standing waves: formed by superposition of two identical waves traveling in opposite directions",
      "Harmonics in strings: f_n = n(v/2L), both ends fixed",
      "Doppler effect: apparent change in frequency due to relative motion",
    ],
    diagramSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="100" x2="380" y2="100" stroke="#334155" stroke-width="1" stroke-dasharray="3,3"/><path d="M 30 100 Q 60 40 90 100 Q 120 160 150 100 Q 180 40 210 100 Q 240 160 270 100 Q 300 40 330 100 Q 360 160 380 100" fill="none" stroke="#f59e0b" stroke-width="2.5"/><line x1="90" y1="100" x2="90" y2="40" stroke="#06b6d4" stroke-width="1" stroke-dasharray="3,3"/><text x="95" y="65" fill="#06b6d4" font-size="10" font-family="monospace">A</text><line x1="90" y1="105" x2="210" y2="105" stroke="#22c55e" stroke-width="1.5"/><text x="150" y="120" fill="#22c55e" font-size="10" text-anchor="middle" font-family="monospace">λ</text><text x="300" y="30" fill="#94a3b8" font-size="11" font-family="monospace">v = fλ</text></svg>`,
    difficulty: "Medium",
    weightage: "Medium",
  },
];

// ============ CLASS 12 CONCEPTS ============

export const class12Concepts: Concept[] = [
  {
    id: "electrostatics",
    title: "Electrostatics",
    chapter: "Electric Charges and Fields",
    classLevel: "12",
    description: "Electrostatics deals with stationary electric charges and the forces, fields, and potentials they create. Coulomb's law, electric field lines, Gauss's law, and capacitors form the core. This is one of the most important chapters for both JEE and NEET with very high weightage.",
    keyFormulas: [
      { formula: "F = kq₁q₂/r²", description: "Coulomb's law" },
      { formula: "E = kq/r²", description: "Electric field due to point charge" },
      { formula: "V = kq/r", description: "Electric potential" },
      { formula: "C = Q/V", description: "Capacitance" },
      { formula: "U = ½CV² = Q²/2C", description: "Energy stored in capacitor" },
      { formula: "∮E·dA = q/ε₀", description: "Gauss's law" },
    ],
    concepts: [
      "Like charges repel, unlike charges attract",
      "Electric field lines: start from +ve, end at -ve, never cross",
      "Gauss's law: total electric flux through closed surface = enclosed charge/ε₀",
      "Electric potential is scalar; potential energy U = kq₁q₂/r",
      "Capacitors in series: 1/C = 1/C₁ + 1/C₂; parallel: C = C₁ + C₂",
      "Dielectrics increase capacitance: C' = KC",
    ],
    diagramSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><circle cx="120" cy="100" r="20" fill="none" stroke="#ef4444" stroke-width="2"/><text x="120" y="105" fill="#ef4444" font-size="14" text-anchor="middle" font-family="monospace">+q</text><circle cx="300" cy="100" r="20" fill="none" stroke="#06b6d4" stroke-width="2"/><text x="300" y="105" fill="#06b6d4" font-size="14" text-anchor="middle" font-family="monospace">-q</text><line x1="140" y1="100" x2="280" y2="100" stroke="#f59e0b" stroke-width="1.5" marker-end="url(#ah)"/><line x1="140" y1="80" x2="280" y2="80" stroke="#f59e0b" stroke-width="1" stroke-dasharray="3,3"/><line x1="140" y1="120" x2="280" y2="120" stroke="#f59e0b" stroke-width="1" stroke-dasharray="3,3"/><text x="210" y="95" fill="#f59e0b" font-size="10" text-anchor="middle" font-family="monospace">E field</text><text x="210" y="170" fill="#94a3b8" font-size="11" text-anchor="middle" font-family="monospace">F = kq₁q₂/r²</text><line x1="140" y1="145" x2="280" y2="145" stroke="#334155" stroke-width="1"/><text x="210" y="155" fill="#94a3b8" font-size="10" text-anchor="middle" font-family="monospace">r</text></svg>`,
    difficulty: "Hard",
    weightage: "High",
  },
  {
    id: "current-electricity",
    title: "Current Electricity",
    chapter: "Current Electricity",
    classLevel: "12",
    description: "Current electricity covers the flow of electric charges through conductors. Ohm's law, Kirchhoff's laws, and circuit analysis are fundamental. This chapter has the highest weightage in NEET physics and is equally important for JEE.",
    keyFormulas: [
      { formula: "V = IR", description: "Ohm's law" },
      { formula: "P = VI = I²R = V²/R", description: "Electric power" },
      { formula: "R = ρL/A", description: "Resistance of conductor" },
      { formula: "1/R = 1/R₁ + 1/R₂", description: "Parallel resistance" },
      { formula: "EMF = V + Ir", description: "EMF with internal resistance" },
    ],
    concepts: [
      "Current I = dQ/dt = nAv_d (drift velocity relation)",
      "Ohm's law: V ∝ I at constant temperature",
      "Kirchhoff's Junction Rule: ΣI_in = ΣI_out (charge conservation)",
      "Kirchhoff's Loop Rule: ΣV = 0 around any closed loop (energy conservation)",
      "Wheatstone bridge: balanced when R₁/R₂ = R₃/R₄",
      "Meter bridge and potentiometer for precise measurements",
    ],
    diagramSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="50" width="280" height="100" rx="4" fill="none" stroke="#334155" stroke-width="2"/><line x1="60" y1="100" x2="120" y2="100" stroke="#f59e0b" stroke-width="2"/><rect x="120" y="88" width="60" height="24" rx="3" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/><text x="150" y="105" fill="#f59e0b" font-size="11" text-anchor="middle" font-family="monospace">R₁</text><line x1="180" y1="100" x2="220" y2="100" stroke="#f59e0b" stroke-width="2"/><rect x="220" y="88" width="60" height="24" rx="3" fill="#1e293b" stroke="#06b6d4" stroke-width="2"/><text x="250" y="105" fill="#06b6d4" font-size="11" text-anchor="middle" font-family="monospace">R₂</text><line x1="280" y1="100" x2="340" y2="100" stroke="#06b6d4" stroke-width="2"/><circle cx="60" cy="100" r="15" fill="none" stroke="#22c55e" stroke-width="2"/><text x="60" y="105" fill="#22c55e" font-size="14" text-anchor="middle" font-family="monospace">ε</text><text x="200" y="40" fill="#94a3b8" font-size="11" text-anchor="middle" font-family="monospace">V = IR, P = VI</text><path d="M 330 95 L 340 100 L 330 105" fill="none" stroke="#f59e0b" stroke-width="1.5"/><text x="350" y="85" fill="#f59e0b" font-size="10" font-family="monospace">I</text></svg>`,
    difficulty: "Medium",
    weightage: "High",
  },
  {
    id: "magnetic-effects",
    title: "Magnetic Effects of Current",
    chapter: "Moving Charges and Magnetism",
    classLevel: "12",
    description: "This chapter explores how electric currents create magnetic fields and how magnetic fields exert forces on moving charges and current-carrying conductors. Biot-Savart law and Ampere's law are the key tools for calculating magnetic fields.",
    keyFormulas: [
      { formula: "F = qvBsinθ", description: "Lorentz force on moving charge" },
      { formula: "F = BILsinθ", description: "Force on current-carrying conductor" },
      { formula: "B = μ₀I/2πr", description: "Magnetic field of long straight wire" },
      { formula: "B = μ₀nI", description: "Magnetic field inside solenoid" },
      { formula: "τ = NBIA sinθ", description: "Torque on current loop" },
    ],
    concepts: [
      "Moving charges create magnetic fields; magnetic fields exert force on moving charges",
      "Right-hand rule for direction of magnetic field and force",
      "Biot-Savart law: dB = (μ₀/4π)(Idl × r̂)/r²",
      "Ampere's circuital law: ∮B·dl = μ₀I_enclosed",
      "Cyclotron: charged particle moves in circle in magnetic field, r = mv/qB",
      "Force between parallel currents: same direction attract, opposite repel",
    ],
    diagramSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><circle cx="200" cy="100" r="50" fill="none" stroke="#06b6d4" stroke-width="1.5" stroke-dasharray="5,3"/><circle cx="200" cy="100" r="5" fill="#f59e0b"/><text x="200" y="75" fill="#f59e0b" font-size="10" text-anchor="middle" font-family="monospace">I (out)</text><path d="M 170 55 A 55 55 0 0 1 250 100" fill="none" stroke="#06b6d4" stroke-width="2" marker-end="url(#ah)"/><text x="260" y="70" fill="#06b6d4" font-size="11" font-family="monospace">B</text><text x="80" y="40" fill="#94a3b8" font-size="11" font-family="monospace">B = μ₀I/2πr</text><text x="80" y="60" fill="#94a3b8" font-size="11" font-family="monospace">F = qvB sinθ</text><circle cx="200" cy="100" r="80" fill="none" stroke="#334155" stroke-width="1" stroke-dasharray="3,3"/><text x="200" y="195" fill="#94a3b8" font-size="10" text-anchor="middle" font-family="monospace">Concentric field lines</text></svg>`,
    difficulty: "Hard",
    weightage: "High",
  },
  {
    id: "electromagnetic-induction",
    title: "Electromagnetic Induction",
    chapter: "Electromagnetic Induction",
    classLevel: "12",
    description: "EMI explains how changing magnetic flux induces an EMF in a conductor. Faraday's law and Lenz's law are the foundations. This chapter connects to AC circuits, transformers, and generators — all critical for JEE Advanced.",
    keyFormulas: [
      { formula: "EMF = -dΦ/dt", description: "Faraday's law" },
      { formula: "Φ = BA cosθ", description: "Magnetic flux" },
      { formula: "EMF = BLv", description: "Motional EMF" },
      { formula: "L = NΦ/I", description: "Self-inductance" },
      { formula: "U = ½LI²", description: "Energy in inductor" },
    ],
    concepts: [
      "Faraday's law: induced EMF equals negative rate of change of magnetic flux",
      "Lenz's law: induced current opposes the change that produces it",
      "Motional EMF: conductor moving in magnetic field generates EMF",
      "Self-induction: changing current in coil induces EMF in same coil",
      "Mutual induction: changing current in one coil induces EMF in nearby coil",
      "Eddy currents: induced currents in bulk conductors",
    ],
    diagramSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="200" cy="100" rx="80" ry="40" fill="none" stroke="#334155" stroke-width="2"/><line x1="200" y1="30" x2="200" y2="60" stroke="#06b6d4" stroke-width="2" marker-end="url(#ah)"/><line x1="180" y1="30" x2="180" y2="60" stroke="#06b6d4" stroke-width="1.5"/><line x1="220" y1="30" x2="220" y2="60" stroke="#06b6d4" stroke-width="1.5"/><text x="240" y="45" fill="#06b6d4" font-size="11" font-family="monospace">B (changing)</text><path d="M 140 100 A 30 30 0 0 1 260 100" fill="none" stroke="#f59e0b" stroke-width="2" marker-end="url(#ah)"/><text x="200" y="85" fill="#f59e0b" font-size="10" text-anchor="middle" font-family="monospace">Induced I</text><text x="80" y="170" fill="#94a3b8" font-size="11" font-family="monospace">EMF = -dΦ/dt</text><text x="250" y="170" fill="#94a3b8" font-size="11" font-family="monospace">Φ = BA cosθ</text></svg>`,
    difficulty: "Hard",
    weightage: "High",
  },
  {
    id: "ray-optics",
    title: "Ray Optics",
    chapter: "Ray Optics and Optical Instruments",
    classLevel: "12",
    description: "Ray optics treats light as rays traveling in straight lines. Reflection, refraction, total internal reflection, lenses, mirrors, and prisms are covered. This chapter is highly scoring in NEET and involves many numerical problems in JEE.",
    keyFormulas: [
      { formula: "1/f = 1/v - 1/u", description: "Mirror/Lens formula" },
      { formula: "n₁sinθ₁ = n₂sinθ₂", description: "Snell's law" },
      { formula: "1/f = (n-1)(1/R₁ - 1/R₂)", description: "Lensmaker's equation" },
      { formula: "m = -v/u", description: "Magnification (mirror)" },
      { formula: "sinC = 1/n", description: "Critical angle for TIR" },
    ],
    concepts: [
      "Laws of reflection: angle of incidence = angle of reflection",
      "Refraction: light bends towards normal when entering denser medium",
      "Total Internal Reflection occurs when light goes from denser to rarer medium at angle > critical angle",
      "Concave mirror: converging; Convex mirror: diverging",
      "Convex lens: converging; Concave lens: diverging",
      "Prism: deviation δ = (n-1)A for thin prism",
    ],
    diagramSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><line x1="200" y1="20" x2="200" y2="180" stroke="#334155" stroke-width="1" stroke-dasharray="4,4"/><path d="M 190 40 Q 170 100 190 160" fill="none" stroke="#06b6d4" stroke-width="2.5"/><path d="M 210 40 Q 230 100 210 160" fill="none" stroke="#06b6d4" stroke-width="2.5"/><line x1="60" y1="70" x2="190" y2="100" stroke="#f59e0b" stroke-width="2" marker-end="url(#ah)"/><line x1="210" y1="100" x2="350" y2="140" stroke="#f59e0b" stroke-width="2" marker-end="url(#ah)"/><line x1="60" y1="130" x2="190" y2="100" stroke="#f59e0b" stroke-width="1.5" marker-end="url(#ah)"/><line x1="210" y1="100" x2="350" y2="60" stroke="#f59e0b" stroke-width="1.5" marker-end="url(#ah)"/><circle cx="200" cy="100" r="3" fill="#f59e0b"/><text x="200" y="195" fill="#94a3b8" font-size="10" text-anchor="middle" font-family="monospace">Convex Lens</text><text x="80" y="55" fill="#94a3b8" font-size="10" font-family="monospace">Object</text><text x="320" y="55" fill="#94a3b8" font-size="10" font-family="monospace">Image</text></svg>`,
    difficulty: "Medium",
    weightage: "High",
  },
  {
    id: "modern-physics",
    title: "Modern Physics",
    chapter: "Dual Nature, Atoms & Nuclei",
    classLevel: "12",
    description: "Modern physics covers the quantum and nuclear world — photoelectric effect, Bohr model, radioactivity, and nuclear reactions. These topics are highly scoring in both JEE and NEET as they involve direct formula application.",
    keyFormulas: [
      { formula: "E = hf = hc/λ", description: "Photon energy" },
      { formula: "KE_max = hf - φ", description: "Photoelectric equation" },
      { formula: "λ = h/mv", description: "de Broglie wavelength" },
      { formula: "Eₙ = -13.6/n² eV", description: "Bohr energy levels (H atom)" },
      { formula: "rₙ = 0.529n² Å", description: "Bohr radius" },
      { formula: "N = N₀e^(-λt)", description: "Radioactive decay" },
      { formula: "T½ = 0.693/λ", description: "Half-life" },
    ],
    concepts: [
      "Photoelectric effect: light ejects electrons; KE depends on frequency, not intensity",
      "Threshold frequency: minimum frequency needed to eject electrons",
      "de Broglie hypothesis: matter has wave nature, λ = h/p",
      "Bohr model: electrons in discrete orbits, quantized angular momentum",
      "Radioactivity: α (He nucleus), β (electron), γ (photon) decay",
      "Nuclear fission: heavy nucleus splits; fusion: light nuclei combine",
      "Mass-energy equivalence: E = mc²",
    ],
    diagramSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><circle cx="200" cy="100" r="8" fill="#f59e0b"/><text x="200" y="104" fill="#0B1120" font-size="8" text-anchor="middle" font-family="monospace">n</text><circle cx="200" cy="100" r="30" fill="none" stroke="#334155" stroke-width="1.5"/><circle cx="200" cy="100" r="55" fill="none" stroke="#334155" stroke-width="1.5"/><circle cx="200" cy="100" r="80" fill="none" stroke="#334155" stroke-width="1.5"/><circle cx="230" cy="100" r="4" fill="#06b6d4"/><circle cx="255" cy="100" r="4" fill="#06b6d4"/><circle cx="280" cy="100" r="4" fill="#06b6d4"/><text x="200" y="135" fill="#94a3b8" font-size="9" text-anchor="middle" font-family="monospace">n=1</text><text x="200" y="160" fill="#94a3b8" font-size="9" text-anchor="middle" font-family="monospace">n=2</text><text x="200" y="185" fill="#94a3b8" font-size="9" text-anchor="middle" font-family="monospace">n=3</text><line x1="234" y1="96" x2="251" y2="96" stroke="#f59e0b" stroke-width="1.5" marker-end="url(#ah)"/><text x="320" y="50" fill="#f59e0b" font-size="10" font-family="monospace">Eₙ = -13.6/n²</text><text x="320" y="70" fill="#06b6d4" font-size="10" font-family="monospace">rₙ = 0.529n²</text><text x="320" y="90" fill="#94a3b8" font-size="10" font-family="monospace">Bohr Model</text></svg>`,
    difficulty: "Medium",
    weightage: "High",
  },
  {
    id: "semiconductors",
    title: "Semiconductor Electronics",
    chapter: "Semiconductor Electronics",
    classLevel: "12",
    description: "This chapter covers the physics of semiconductors, p-n junctions, diodes, transistors, and logic gates. While less mathematically intensive, understanding band theory and device operation is essential for NEET and JEE.",
    keyFormulas: [
      { formula: "I = I₀(e^(eV/kT) - 1)", description: "Diode equation" },
      { formula: "β = I_C/I_B", description: "Current gain (CE)" },
      { formula: "α = I_C/I_E", description: "Current gain (CB)" },
      { formula: "β = α/(1-α)", description: "Relation between α and β" },
    ],
    concepts: [
      "Intrinsic semiconductor: pure Si/Ge; extrinsic: doped with impurities",
      "n-type: doped with pentavalent (P, As); p-type: trivalent (B, Al)",
      "p-n junction: depletion region forms at junction",
      "Forward bias: reduces barrier, current flows; Reverse bias: increases barrier",
      "Zener diode: used as voltage regulator in reverse breakdown",
      "Logic gates: AND, OR, NOT, NAND (universal), NOR (universal)",
    ],
    diagramSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><rect x="80" y="60" width="100" height="80" rx="3" fill="#1e293b" stroke="#ef4444" stroke-width="2"/><text x="130" y="105" fill="#ef4444" font-size="14" text-anchor="middle" font-family="monospace">P</text><rect x="180" y="60" width="100" height="80" rx="3" fill="#1e293b" stroke="#06b6d4" stroke-width="2"/><text x="230" y="105" fill="#06b6d4" font-size="14" text-anchor="middle" font-family="monospace">N</text><rect x="165" y="70" width="30" height="60" rx="2" fill="#334155" opacity="0.5"/><text x="180" y="100" fill="#94a3b8" font-size="8" text-anchor="middle" font-family="monospace">DR</text><line x1="40" y1="100" x2="80" y2="100" stroke="#f59e0b" stroke-width="2"/><line x1="280" y1="100" x2="340" y2="100" stroke="#f59e0b" stroke-width="2"/><text x="40" y="90" fill="#f59e0b" font-size="10" font-family="monospace">A</text><text x="340" y="90" fill="#f59e0b" font-size="10" font-family="monospace">K</text><text x="200" y="170" fill="#94a3b8" font-size="11" text-anchor="middle" font-family="monospace">p-n Junction Diode</text></svg>`,
    difficulty: "Easy",
    weightage: "Medium",
  },
];

// ============ ALL CONCEPTS ============
export const allConcepts = [...class11Concepts, ...class12Concepts];

// ============ QUIZ QUESTIONS ============
export const quizQuestions: QuizQuestion[] = [
  // ============ KINEMATICS (8 questions) ============
  { id: "q1", conceptId: "kinematics", question: "A ball is thrown vertically upward with velocity 20 m/s. What is the maximum height reached? (g = 10 m/s²)", options: ["10 m", "20 m", "30 m", "40 m"], correctIndex: 1, explanation: "Using v² = u² - 2gH, at max height v=0: H = u²/2g = (20)²/(2×10) = 20 m", difficulty: "Easy" },
  { id: "q2", conceptId: "kinematics", question: "A projectile is launched at 45° with speed 20 m/s. What is the range? (g = 10 m/s²)", options: ["20 m", "30 m", "40 m", "50 m"], correctIndex: 2, explanation: "R = u²sin2θ/g = (400×sin90°)/10 = 40 m. At 45°, range is maximum.", difficulty: "Easy" },
  { id: "q3", conceptId: "kinematics", question: "A car accelerates from rest at 2 m/s². How far does it travel in 5 seconds?", options: ["10 m", "25 m", "50 m", "100 m"], correctIndex: 1, explanation: "s = ut + ½at² = 0 + ½(2)(25) = 25 m", difficulty: "Easy" },
  { id: "q4", conceptId: "kinematics", question: "A particle moves along x-axis with velocity v = 3t² - 6t. At what time does it change direction?", options: ["t = 1 s", "t = 2 s", "t = 3 s", "t = 0 s"], correctIndex: 1, explanation: "Direction changes when v = 0: 3t² - 6t = 0 → 3t(t-2) = 0 → t = 0 or t = 2 s. Since t = 0 is start, direction changes at t = 2 s.", difficulty: "Medium" },
  { id: "q5", conceptId: "kinematics", question: "Two projectiles are launched at angles 30° and 60° with the same speed. What is the ratio of their ranges?", options: ["1:1", "1:√3", "√3:1", "1:2"], correctIndex: 0, explanation: "R = u²sin2θ/g. sin(60°) = sin(120°) = √3/2. So both have the same range. Complementary angles give equal range.", difficulty: "Medium" },
  { id: "q6", conceptId: "kinematics", question: "A stone is dropped from a tower. It covers 75% of total height in the last second. What is the total time of fall?", options: ["1 s", "2 s", "3 s", "4 s"], correctIndex: 1, explanation: "In last 1 second, distance = ½g(T² - (T-1)²) = ½g(2T-1). Total distance = ½gT². Given: ½g(2T-1)/½gT² = 3/4 → (2T-1)/T² = 3/4 → 8T-4 = 3T² → 3T²-8T+4 = 0 → T = 2 s", difficulty: "Hard" },
  { id: "q7", conceptId: "kinematics", question: "A boat crosses a river of width 100 m. The river flows at 3 m/s and the boat speed in still water is 5 m/s. What is the minimum time to cross?", options: ["20 s", "25 s", "33.3 s", "50 s"], correctIndex: 0, explanation: "Minimum time = d/v_boat = 100/5 = 20 s. For minimum time, boat should point perpendicular to river flow.", difficulty: "Medium" },
  { id: "q8", conceptId: "kinematics", question: "The velocity-time graph of a particle is a straight line passing through origin with slope 2. What is the displacement in 3 seconds?", options: ["6 m", "9 m", "12 m", "18 m"], correctIndex: 1, explanation: "v = 2t (slope = acceleration = 2 m/s²). Displacement = area under v-t graph = ½ × base × height = ½ × 3 × 6 = 9 m", difficulty: "Easy" },

  // ============ LAWS OF MOTION (8 questions) ============
  { id: "q9", conceptId: "laws-of-motion", question: "A 5 kg block on a frictionless surface is pushed with 20 N force. What is the acceleration?", options: ["2 m/s²", "4 m/s²", "5 m/s²", "10 m/s²"], correctIndex: 1, explanation: "F = ma → a = F/m = 20/5 = 4 m/s²", difficulty: "Easy" },
  { id: "q10", conceptId: "laws-of-motion", question: "A 10 kg block is on a surface with μ = 0.3. What is the friction force? (g = 10 m/s²)", options: ["10 N", "20 N", "30 N", "50 N"], correctIndex: 2, explanation: "f = μN = μmg = 0.3 × 10 × 10 = 30 N", difficulty: "Easy" },
  { id: "q11", conceptId: "laws-of-motion", question: "What is the minimum speed for a car to negotiate a circular turn of radius 50 m banked at 30°? (g = 10 m/s²)", options: ["12 m/s", "17 m/s", "20 m/s", "25 m/s"], correctIndex: 1, explanation: "v = √(rg tanθ) = √(50 × 10 × tan30°) = √(500 × 0.577) ≈ 17 m/s", difficulty: "Medium" },
  { id: "q12", conceptId: "laws-of-motion", question: "An elevator of mass 1000 kg accelerates upward at 2 m/s². What is the tension in the cable? (g = 10 m/s²)", options: ["8000 N", "10000 N", "12000 N", "14000 N"], correctIndex: 2, explanation: "T - mg = ma → T = m(g+a) = 1000(10+2) = 12000 N", difficulty: "Easy" },
  { id: "q13", conceptId: "laws-of-motion", question: "Two blocks of 3 kg and 5 kg are connected by a string over a frictionless pulley. What is the acceleration? (g = 10 m/s²)", options: ["1.25 m/s²", "2.5 m/s²", "5 m/s²", "10 m/s²"], correctIndex: 1, explanation: "a = (m₂-m₁)g/(m₁+m₂) = (5-3)×10/(5+3) = 20/8 = 2.5 m/s²", difficulty: "Easy" },
  { id: "q14", conceptId: "laws-of-motion", question: "A body of mass 2 kg is placed on a rough inclined plane (30°, μ = 0.2). What is the net force along the plane? (g = 10 m/s²)", options: ["6.54 N", "10 N", "13.46 N", "20 N"], correctIndex: 0, explanation: "Component along plane = mgsinθ = 2×10×sin30° = 10 N. Friction = μmgcosθ = 0.2×2×10×cos30° = 3.46 N. Net force = 10 - 3.46 = 6.54 N (down the plane)", difficulty: "Medium" },
  { id: "q15", conceptId: "laws-of-motion", question: "A person of mass 60 kg stands on a weighing machine in an elevator moving down with deceleration 5 m/s². What does the scale read? (g = 10 m/s²)", options: ["300 N", "600 N", "900 N", "1200 N"], correctIndex: 2, explanation: "Deceleration while going down means upward acceleration. N = m(g+a) = 60(10+5) = 900 N", difficulty: "Medium" },
  { id: "q16", conceptId: "laws-of-motion", question: "A block is placed on a smooth inclined plane of angle 45°. What is its acceleration down the plane? (g = 10 m/s²)", options: ["5 m/s²", "5√2 m/s²", "7.07 m/s²", "10 m/s²"], correctIndex: 2, explanation: "a = gsinθ = 10 × sin45° = 10 × (1/√2) = 5√2 ≈ 7.07 m/s²", difficulty: "Easy" },

  // ============ WORK, ENERGY & POWER (6 questions) ============
  { id: "q17", conceptId: "work-energy-power", question: "A 2 kg ball falls from 10 m height. What is its kinetic energy just before hitting the ground? (g = 10 m/s²)", options: ["100 J", "200 J", "300 J", "400 J"], correctIndex: 1, explanation: "By conservation of energy: KE = mgh = 2 × 10 × 10 = 200 J", difficulty: "Easy" },
  { id: "q18", conceptId: "work-energy-power", question: "A spring with k = 200 N/m is compressed by 0.1 m. What is the stored potential energy?", options: ["0.5 J", "1 J", "2 J", "10 J"], correctIndex: 1, explanation: "PE = ½kx² = ½ × 200 × (0.1)² = 1 J", difficulty: "Easy" },
  { id: "q19", conceptId: "work-energy-power", question: "A force F = (3i + 4j) N displaces a body by d = (2i + 3j) m. What is the work done?", options: ["12 J", "18 J", "24 J", "6 J"], correctIndex: 1, explanation: "W = F·d = (3×2) + (4×3) = 6 + 12 = 18 J", difficulty: "Easy" },
  { id: "q20", conceptId: "work-energy-power", question: "A pump lifts 200 kg of water to a height of 10 m in 20 seconds. What is the power? (g = 10 m/s²)", options: ["500 W", "1000 W", "2000 W", "10000 W"], correctIndex: 1, explanation: "P = W/t = mgh/t = (200 × 10 × 10)/20 = 1000 W = 1 kW", difficulty: "Easy" },
  { id: "q21", conceptId: "work-energy-power", question: "In a perfectly inelastic collision, a 2 kg body moving at 6 m/s collides with a 4 kg body at rest. What is the velocity after collision?", options: ["1 m/s", "2 m/s", "3 m/s", "6 m/s"], correctIndex: 1, explanation: "By conservation of momentum: m₁v₁ = (m₁+m₂)v → 2×6 = (2+4)v → v = 12/6 = 2 m/s", difficulty: "Easy" },
  { id: "q22", conceptId: "work-energy-power", question: "A body of mass 1 kg has KE = 8 J. A constant force stops it in 2 m. What is the force?", options: ["2 N", "4 N", "8 N", "16 N"], correctIndex: 1, explanation: "By work-energy theorem: W = ΔKE → F×d = 8 J → F = 8/2 = 4 N", difficulty: "Easy" },

  // ============ ROTATIONAL MOTION (5 questions) ============
  { id: "q23", conceptId: "rotational-motion", question: "A disc of mass 2 kg and radius 0.5 m rotates at 10 rad/s. What is its rotational KE?", options: ["2.5 J", "6.25 J", "12.5 J", "25 J"], correctIndex: 2, explanation: "I_disc = ½MR² = ½(2)(0.25) = 0.25 kg·m². KE = ½Iω² = ½(0.25)(100) = 12.5 J", difficulty: "Medium" },
  { id: "q24", conceptId: "rotational-motion", question: "What is the moment of inertia of a solid sphere about its diameter? (M = 5 kg, R = 0.2 m)", options: ["0.04 kg·m²", "0.08 kg·m²", "0.1 kg·m²", "0.2 kg·m²"], correctIndex: 1, explanation: "I = (2/5)MR² = (2/5)(5)(0.04) = 0.08 kg·m²", difficulty: "Easy" },
  { id: "q25", conceptId: "rotational-motion", question: "A torque of 10 N·m acts on a wheel of moment of inertia 5 kg·m². What is the angular acceleration?", options: ["0.5 rad/s²", "2 rad/s²", "5 rad/s²", "50 rad/s²"], correctIndex: 1, explanation: "τ = Iα → α = τ/I = 10/5 = 2 rad/s²", difficulty: "Easy" },
  { id: "q26", conceptId: "rotational-motion", question: "A solid cylinder rolls down an incline without slipping. What fraction of its total KE is rotational?", options: ["1/2", "1/3", "2/3", "1/4"], correctIndex: 1, explanation: "For solid cylinder: KE_rot/KE_total = (½Iω²)/(½mv² + ½Iω²) = (½ × ½mR²ω²)/(½mv² + ¼mv²) = (¼mv²)/(¾mv²) = 1/3", difficulty: "Medium" },
  { id: "q27", conceptId: "rotational-motion", question: "An ice skater spins with arms outstretched at 2 rev/s. She pulls her arms in, reducing her moment of inertia to half. What is her new angular velocity?", options: ["1 rev/s", "2 rev/s", "4 rev/s", "8 rev/s"], correctIndex: 2, explanation: "By conservation of angular momentum: I₁ω₁ = I₂ω₂ → ω₂ = I₁ω₁/I₂ = (I)(2)/(I/2) = 4 rev/s", difficulty: "Easy" },

  // ============ GRAVITATION (5 questions) ============
  { id: "q28", conceptId: "gravitation", question: "What is the escape velocity from Earth's surface? (g = 10 m/s², R = 6400 km)", options: ["7.9 km/s", "11.2 km/s", "16.7 km/s", "22.4 km/s"], correctIndex: 1, explanation: "v_e = √(2gR) = √(2 × 10 × 6.4 × 10⁶) = √(1.28 × 10⁸) ≈ 11.2 km/s", difficulty: "Easy" },
  { id: "q29", conceptId: "gravitation", question: "At what height above Earth's surface is the acceleration due to gravity reduced to half? (R = radius of Earth)", options: ["R", "R/2", "(√2 - 1)R", "2R"], correctIndex: 2, explanation: "g' = g/(1 + h/R)². For g' = g/2: 2 = (1 + h/R)² → 1 + h/R = √2 → h = (√2 - 1)R", difficulty: "Medium" },
  { id: "q30", conceptId: "gravitation", question: "The time period of a satellite orbiting close to Earth's surface is approximately:", options: ["24 hours", "84.6 minutes", "12 hours", "60 minutes"], correctIndex: 1, explanation: "T = 2π√(R/g) = 2π√(6.4×10⁶/10) ≈ 2π × 800 ≈ 5024 s ≈ 84.6 minutes", difficulty: "Medium" },
  { id: "q31", conceptId: "gravitation", question: "Two masses of 1 kg each are separated by 1 m. What is the gravitational force? (G = 6.67×10⁻¹¹)", options: ["6.67×10⁻¹¹ N", "6.67×10⁻⁸ N", "9.8 N", "1 N"], correctIndex: 0, explanation: "F = Gm₁m₂/r² = 6.67×10⁻¹¹ × 1 × 1/1² = 6.67×10⁻¹¹ N", difficulty: "Easy" },
  { id: "q32", conceptId: "gravitation", question: "If Earth's radius shrinks to half keeping mass same, what happens to g at the surface?", options: ["Doubles", "Halves", "Becomes 4 times", "Remains same"], correctIndex: 2, explanation: "g = GM/R². If R → R/2, then g' = GM/(R/2)² = 4GM/R² = 4g", difficulty: "Medium" },

  // ============ THERMODYNAMICS (6 questions) ============
  { id: "q33", conceptId: "thermodynamics", question: "A Carnot engine works between 500K and 300K. What is its efficiency?", options: ["20%", "40%", "60%", "80%"], correctIndex: 1, explanation: "η = 1 - T₂/T₁ = 1 - 300/500 = 1 - 0.6 = 0.4 = 40%", difficulty: "Easy" },
  { id: "q34", conceptId: "thermodynamics", question: "In an isothermal process, which quantity remains constant?", options: ["Pressure", "Volume", "Temperature", "Entropy"], correctIndex: 2, explanation: "Isothermal means constant temperature. The word 'iso' means equal, 'thermal' means temperature.", difficulty: "Easy" },
  { id: "q35", conceptId: "thermodynamics", question: "An ideal gas undergoes free expansion. What is the change in internal energy?", options: ["Increases", "Decreases", "Zero", "Cannot determine"], correctIndex: 2, explanation: "In free expansion: W = 0 (no external pressure) and Q = 0 (sudden process). By first law: ΔU = Q - W = 0", difficulty: "Medium" },
  { id: "q36", conceptId: "thermodynamics", question: "The ratio of specific heats (γ) for a diatomic gas at room temperature is:", options: ["1.33", "1.40", "1.67", "1.50"], correctIndex: 1, explanation: "For diatomic gas: f = 5 (3 translational + 2 rotational). γ = 1 + 2/f = 1 + 2/5 = 7/5 = 1.40", difficulty: "Easy" },
  { id: "q37", conceptId: "thermodynamics", question: "In which process is the work done by gas maximum for same change in temperature?", options: ["Isobaric", "Isothermal", "Adiabatic", "Isochoric"], correctIndex: 0, explanation: "For same ΔT: W_isobaric = nRΔT, W_isothermal < W_isobaric, W_adiabatic < W_isothermal, W_isochoric = 0. So isobaric gives maximum work.", difficulty: "Medium" },
  { id: "q38", conceptId: "thermodynamics", question: "2 moles of an ideal gas at 300K are heated at constant pressure until temperature doubles. What is the work done? (R = 8.3 J/mol·K)", options: ["2490 J", "4980 J", "1245 J", "9960 J"], correctIndex: 1, explanation: "W = nRΔT = 2 × 8.3 × (600-300) = 2 × 8.3 × 300 = 4980 J", difficulty: "Easy" },

  // ============ OSCILLATIONS & WAVES (6 questions) ============
  { id: "q39", conceptId: "oscillations", question: "A simple pendulum has length 1 m. What is its time period? (g = 10 m/s²)", options: ["1 s", "2 s", "π s", "2π s"], correctIndex: 1, explanation: "T = 2π√(l/g) = 2π√(1/10) = 2π × 0.316 ≈ 2 s", difficulty: "Easy" },
  { id: "q40", conceptId: "oscillations", question: "A particle executes SHM with amplitude 5 cm and time period 2 s. What is the maximum velocity?", options: ["5π cm/s", "10π cm/s", "2.5π cm/s", "20π cm/s"], correctIndex: 0, explanation: "v_max = Aω = A × 2π/T = 5 × 2π/2 = 5π cm/s", difficulty: "Easy" },
  { id: "q41", conceptId: "oscillations", question: "In SHM, at what displacement from mean position is KE equal to PE?", options: ["A", "A/2", "A/√2", "A/4"], correctIndex: 2, explanation: "KE = PE → ½mω²(A²-x²) = ½mω²x² → A²-x² = x² → x² = A²/2 → x = A/√2", difficulty: "Medium" },
  { id: "q42", conceptId: "waves", question: "Two tuning forks of frequencies 256 Hz and 260 Hz are sounded together. What is the beat frequency?", options: ["2 Hz", "4 Hz", "8 Hz", "516 Hz"], correctIndex: 1, explanation: "Beat frequency = |f₁ - f₂| = |256 - 260| = 4 Hz", difficulty: "Easy" },
  { id: "q43", conceptId: "waves", question: "The speed of sound in air at 0°C is 332 m/s. What is it at 100°C?", options: ["332 m/s", "387 m/s", "442 m/s", "664 m/s"], correctIndex: 1, explanation: "v ∝ √T → v₂/v₁ = √(T₂/T₁) = √(373/273) = √1.366 = 1.169 → v₂ = 332 × 1.169 ≈ 387 m/s", difficulty: "Medium" },
  { id: "q44", conceptId: "waves", question: "A string of length 1 m is fixed at both ends and vibrates in 3 loops. What is the wavelength?", options: ["1/3 m", "2/3 m", "1 m", "3 m"], correctIndex: 1, explanation: "For n loops: L = nλ/2 → 1 = 3λ/2 → λ = 2/3 m", difficulty: "Easy" },

  // ============ ELECTROSTATICS (8 questions) ============
  { id: "q45", conceptId: "electrostatics", question: "Two charges of +2μC and -2μC are separated by 0.1 m. What is the force? (k = 9×10⁹)", options: ["0.36 N", "3.6 N", "36 N", "360 N"], correctIndex: 1, explanation: "F = kq₁q₂/r² = 9×10⁹ × 2×10⁻⁶ × 2×10⁻⁶ / (0.1)² = 3.6 N", difficulty: "Easy" },
  { id: "q46", conceptId: "electrostatics", question: "A capacitor of 10 μF is charged to 100 V. What is the energy stored?", options: ["0.05 J", "0.5 J", "5 J", "50 J"], correctIndex: 0, explanation: "U = ½CV² = ½ × 10×10⁻⁶ × (100)² = 0.05 J", difficulty: "Easy" },
  { id: "q47", conceptId: "electrostatics", question: "Electric field inside a uniformly charged hollow sphere is:", options: ["Zero", "Maximum at center", "Proportional to r", "Proportional to 1/r²"], correctIndex: 0, explanation: "By Gauss's law, the enclosed charge inside a hollow sphere is zero, so E = 0 inside.", difficulty: "Easy" },
  { id: "q48", conceptId: "electrostatics", question: "Three capacitors of 6 μF each are connected in series. What is the equivalent capacitance?", options: ["2 μF", "6 μF", "9 μF", "18 μF"], correctIndex: 0, explanation: "1/C = 1/6 + 1/6 + 1/6 = 3/6 = 1/2 → C = 2 μF", difficulty: "Easy" },
  { id: "q49", conceptId: "electrostatics", question: "The electric potential at a point due to a dipole on the axial line at distance r is proportional to:", options: ["1/r", "1/r²", "1/r³", "r"], correctIndex: 1, explanation: "V_axial = kp/r² (for r >> a), where p is the dipole moment. Potential falls as 1/r² for a dipole.", difficulty: "Medium" },
  { id: "q50", conceptId: "electrostatics", question: "A parallel plate capacitor has capacitance C. If a dielectric of constant K is inserted fully, the new capacitance is:", options: ["C/K", "KC", "C+K", "C-K"], correctIndex: 1, explanation: "When dielectric is fully inserted: C' = KC. The dielectric increases capacitance by factor K.", difficulty: "Easy" },
  { id: "q51", conceptId: "electrostatics", question: "The work done in moving a charge of 5 μC between two points with potential difference 12 V is:", options: ["60 μJ", "2.4 μJ", "60 J", "0.6 J"], correctIndex: 0, explanation: "W = qΔV = 5×10⁻⁶ × 12 = 60×10⁻⁶ J = 60 μJ", difficulty: "Easy" },
  { id: "q52", conceptId: "electrostatics", question: "An infinite line charge has linear charge density λ. The electric field at distance r from it is:", options: ["λ/2πε₀r", "λ/4πε₀r²", "λ/ε₀", "λr/2ε₀"], correctIndex: 0, explanation: "By Gauss's law for infinite line charge: E × 2πrl = λl/ε₀ → E = λ/(2πε₀r)", difficulty: "Medium" },

  // ============ CURRENT ELECTRICITY (6 questions) ============
  { id: "q53", conceptId: "current-electricity", question: "Three resistors of 6Ω each are connected in parallel. What is the equivalent resistance?", options: ["2 Ω", "6 Ω", "9 Ω", "18 Ω"], correctIndex: 0, explanation: "1/R = 1/6 + 1/6 + 1/6 = 3/6 = 1/2, so R = 2 Ω", difficulty: "Easy" },
  { id: "q54", conceptId: "current-electricity", question: "A 12V battery with internal resistance 1Ω drives current through 5Ω external resistance. What is the current?", options: ["1 A", "2 A", "2.4 A", "12 A"], correctIndex: 1, explanation: "I = EMF/(R + r) = 12/(5 + 1) = 12/6 = 2 A", difficulty: "Easy" },
  { id: "q55", conceptId: "current-electricity", question: "In a Wheatstone bridge, if P = 10Ω, Q = 20Ω, R = 15Ω, what should S be for balance?", options: ["10 Ω", "20 Ω", "30 Ω", "40 Ω"], correctIndex: 2, explanation: "For balance: P/Q = R/S → 10/20 = 15/S → S = 30 Ω", difficulty: "Easy" },
  { id: "q56", conceptId: "current-electricity", question: "The resistivity of a conductor depends on:", options: ["Length", "Area", "Temperature and material", "Volume"], correctIndex: 2, explanation: "Resistivity (ρ) is a material property that depends on the material and temperature. R = ρL/A, but ρ itself is independent of dimensions.", difficulty: "Easy" },
  { id: "q57", conceptId: "current-electricity", question: "A wire of resistance 12Ω is bent into a circle. The resistance between two diametrically opposite points is:", options: ["3 Ω", "6 Ω", "12 Ω", "24 Ω"], correctIndex: 0, explanation: "The wire forms two 6Ω resistors in parallel: R = (6×6)/(6+6) = 36/12 = 3 Ω", difficulty: "Medium" },
  { id: "q58", conceptId: "current-electricity", question: "5 cells each of EMF 2V and internal resistance 1Ω are connected in series. What is the current through 5Ω external resistance?", options: ["0.5 A", "1 A", "2 A", "10 A"], correctIndex: 1, explanation: "Total EMF = 5×2 = 10V. Total internal resistance = 5×1 = 5Ω. I = 10/(5+5) = 1 A", difficulty: "Easy" },

  // ============ MAGNETISM (5 questions) ============
  { id: "q59", conceptId: "magnetic-effects", question: "A proton moves with velocity 10⁶ m/s perpendicular to a magnetic field of 0.1 T. What is the radius of its circular path?", options: ["0.01 m", "0.1 m", "1 m", "10 m"], correctIndex: 1, explanation: "r = mv/qB = (1.67×10⁻²⁷ × 10⁶)/(1.6×10⁻¹⁹ × 0.1) ≈ 0.1 m", difficulty: "Medium" },
  { id: "q60", conceptId: "magnetic-effects", question: "The magnetic field at the center of a circular coil of radius R carrying current I is:", options: ["μ₀I/2R", "μ₀I/R", "μ₀IR/2", "μ₀I/4πR"], correctIndex: 0, explanation: "B = μ₀I/2R at the center of a circular loop.", difficulty: "Easy" },
  { id: "q61", conceptId: "magnetic-effects", question: "A charged particle enters a uniform magnetic field parallel to the field. Its path will be:", options: ["Circular", "Helical", "Straight line", "Parabolic"], correctIndex: 2, explanation: "When v is parallel to B, the magnetic force F = qv×B = 0 (sin0° = 0). So the particle continues in a straight line.", difficulty: "Easy" },
  { id: "q62", conceptId: "magnetic-effects", question: "The magnetic field inside a long solenoid with n turns per unit length carrying current I is:", options: ["μ₀nI", "μ₀nI/2", "μ₀I/2πr", "μ₀NI/L"], correctIndex: 0, explanation: "B = μ₀nI inside a solenoid (uniform field). Note: n = N/L (turns per unit length).", difficulty: "Easy" },
  { id: "q63", conceptId: "magnetic-effects", question: "Two parallel wires carry currents in the same direction. They will:", options: ["Attract each other", "Repel each other", "Have no force", "Rotate"], correctIndex: 0, explanation: "Parallel currents in same direction attract. Opposite direction currents repel. This is the basis of the definition of Ampere.", difficulty: "Easy" },

  // ============ EMI (4 questions) ============
  { id: "q64", conceptId: "electromagnetic-induction", question: "A coil of 100 turns has flux changing from 0.1 Wb to 0 in 0.01 s. What is the induced EMF?", options: ["100 V", "1000 V", "10 V", "10000 V"], correctIndex: 1, explanation: "EMF = -NdΦ/dt = -100 × (0 - 0.1)/0.01 = 1000 V", difficulty: "Medium" },
  { id: "q65", conceptId: "electromagnetic-induction", question: "A rod of length 1 m moves with velocity 5 m/s perpendicular to a magnetic field of 0.2 T. The induced EMF is:", options: ["0.5 V", "1 V", "2 V", "5 V"], correctIndex: 1, explanation: "EMF = Bvl = 0.2 × 5 × 1 = 1 V", difficulty: "Easy" },
  { id: "q66", conceptId: "electromagnetic-induction", question: "Lenz's law is a consequence of conservation of:", options: ["Charge", "Momentum", "Energy", "Mass"], correctIndex: 2, explanation: "Lenz's law states that induced current opposes the change causing it. This is a consequence of conservation of energy.", difficulty: "Easy" },
  { id: "q67", conceptId: "electromagnetic-induction", question: "The self-inductance of a coil is 5 mH. If current changes from 2A to 5A in 0.1 s, the induced EMF is:", options: ["0.05 V", "0.15 V", "0.5 V", "1.5 V"], correctIndex: 1, explanation: "EMF = L × dI/dt = 5×10⁻³ × (5-2)/0.1 = 5×10⁻³ × 30 = 0.15 V", difficulty: "Easy" },

  // ============ OPTICS (8 questions) ============
  { id: "q68", conceptId: "ray-optics", question: "An object is placed 30 cm from a concave mirror of focal length 20 cm. Where is the image?", options: ["60 cm", "40 cm", "20 cm", "10 cm"], correctIndex: 0, explanation: "1/f = 1/v + 1/u → 1/(-20) = 1/v + 1/(-30) → v = -60 cm (real image)", difficulty: "Medium" },
  { id: "q69", conceptId: "ray-optics", question: "A convex lens of focal length 20 cm forms a real image at 60 cm. Where is the object?", options: ["20 cm", "30 cm", "40 cm", "60 cm"], correctIndex: 1, explanation: "1/f = 1/v - 1/u → 1/20 = 1/60 - 1/u → 1/u = 1/60 - 1/20 = -2/60 → u = -30 cm", difficulty: "Medium" },
  { id: "q70", conceptId: "ray-optics", question: "The critical angle for glass-air interface is 42°. What is the refractive index of glass?", options: ["1.33", "1.41", "1.49", "1.52"], correctIndex: 2, explanation: "sinC = 1/n → n = 1/sin42° = 1/0.669 ≈ 1.49", difficulty: "Easy" },
  { id: "q71", conceptId: "ray-optics", question: "A thin lens has power -2.5 D. What is its focal length and nature?", options: ["+40 cm, convex", "-40 cm, concave", "+25 cm, convex", "-25 cm, concave"], correctIndex: 1, explanation: "f = 1/P = 1/(-2.5) = -0.4 m = -40 cm. Negative focal length means concave (diverging) lens.", difficulty: "Easy" },
  { id: "q72", conceptId: "ray-optics", question: "In a compound microscope, the magnification is 150. If objective magnification is 30, what is the eyepiece magnification?", options: ["3", "5", "10", "15"], correctIndex: 1, explanation: "M = m_o × m_e → 150 = 30 × m_e → m_e = 5", difficulty: "Easy" },
  { id: "q73", conceptId: "ray-optics", question: "In YDSE, the fringe width is 0.5 mm. If the screen is moved to double the distance, the new fringe width is:", options: ["0.25 mm", "0.5 mm", "1.0 mm", "2.0 mm"], correctIndex: 2, explanation: "β = λD/d. If D doubles, β doubles → new β = 2 × 0.5 = 1.0 mm", difficulty: "Easy" },
  { id: "q74", conceptId: "ray-optics", question: "Light of wavelength 600 nm falls on a single slit of width 0.1 mm. The angular width of central maximum is:", options: ["0.006 rad", "0.012 rad", "0.003 rad", "0.024 rad"], correctIndex: 1, explanation: "Angular width of central max = 2λ/a = 2 × 600×10⁻⁹/0.1×10⁻³ = 0.012 rad", difficulty: "Medium" },
  { id: "q75", conceptId: "ray-optics", question: "Two thin lenses of focal lengths +20 cm and -10 cm are in contact. The combined focal length is:", options: ["+20 cm", "-20 cm", "+10 cm", "-10 cm"], correctIndex: 1, explanation: "1/f = 1/f₁ + 1/f₂ = 1/20 + 1/(-10) = 1/20 - 1/10 = -1/20 → f = -20 cm", difficulty: "Easy" },

  // ============ MODERN PHYSICS (8 questions) ============
  { id: "q76", conceptId: "modern-physics", question: "The work function of a metal is 2 eV. What is the threshold wavelength? (hc = 1240 eV·nm)", options: ["310 nm", "620 nm", "1240 nm", "2480 nm"], correctIndex: 1, explanation: "λ₀ = hc/φ = 1240/2 = 620 nm", difficulty: "Easy" },
  { id: "q77", conceptId: "modern-physics", question: "What is the energy of the electron in the 2nd orbit of hydrogen atom?", options: ["-13.6 eV", "-3.4 eV", "-1.51 eV", "-0.85 eV"], correctIndex: 1, explanation: "Eₙ = -13.6/n² eV → E₂ = -13.6/4 = -3.4 eV", difficulty: "Easy" },
  { id: "q78", conceptId: "modern-physics", question: "The half-life of a radioactive substance is 20 days. What fraction remains after 60 days?", options: ["1/2", "1/4", "1/8", "1/16"], correctIndex: 2, explanation: "Number of half-lives = 60/20 = 3. Fraction remaining = (1/2)³ = 1/8", difficulty: "Easy" },
  { id: "q79", conceptId: "modern-physics", question: "The de Broglie wavelength of an electron accelerated through 100 V is approximately:", options: ["0.123 nm", "1.23 nm", "12.3 nm", "0.0123 nm"], correctIndex: 0, explanation: "λ = 1.226/√V nm = 1.226/√100 = 1.226/10 = 0.1226 nm ≈ 0.123 nm", difficulty: "Easy" },
  { id: "q80", conceptId: "modern-physics", question: "In photoelectric effect, if intensity of light is doubled (keeping frequency same), the maximum KE of photoelectrons:", options: ["Doubles", "Halves", "Remains same", "Becomes 4 times"], correctIndex: 2, explanation: "KE_max = hf - φ. It depends only on frequency, not intensity. Intensity affects the number of electrons, not their energy.", difficulty: "Easy" },
  { id: "q81", conceptId: "modern-physics", question: "The radius of the first Bohr orbit of hydrogen is 0.53 Å. The radius of the 3rd orbit is:", options: ["1.59 Å", "4.77 Å", "0.59 Å", "15.9 Å"], correctIndex: 1, explanation: "rₙ = n²r₁ → r₃ = 9 × 0.53 = 4.77 Å", difficulty: "Easy" },
  { id: "q82", conceptId: "modern-physics", question: "The binding energy per nucleon is maximum for:", options: ["Hydrogen", "Helium", "Iron (Fe-56)", "Uranium"], correctIndex: 2, explanation: "Iron-56 has the highest binding energy per nucleon (~8.8 MeV). This is why both fusion (light nuclei) and fission (heavy nuclei) release energy.", difficulty: "Easy" },
  { id: "q83", conceptId: "modern-physics", question: "In a hydrogen atom, the electron jumps from n=4 to n=2. Which series does this spectral line belong to?", options: ["Lyman", "Balmer", "Paschen", "Brackett"], correctIndex: 1, explanation: "Balmer series: transitions to n=2. Lyman: to n=1, Paschen: to n=3, Brackett: to n=4.", difficulty: "Easy" },

  // ============ SEMICONDUCTORS (4 questions) ============
  { id: "q84", conceptId: "semiconductors", question: "In a common emitter transistor, if α = 0.98, what is β?", options: ["49", "98", "0.98", "9.8"], correctIndex: 0, explanation: "β = α/(1-α) = 0.98/(1-0.98) = 0.98/0.02 = 49", difficulty: "Easy" },
  { id: "q85", conceptId: "semiconductors", question: "In a p-n junction diode, the depletion region is formed due to:", options: ["Drift of majority carriers", "Diffusion of majority carriers", "Drift of minority carriers", "Recombination only"], correctIndex: 1, explanation: "Depletion region forms due to diffusion of majority carriers across the junction, leaving behind immobile ions.", difficulty: "Easy" },
  { id: "q86", conceptId: "semiconductors", question: "A Zener diode is used as:", options: ["Amplifier", "Oscillator", "Voltage regulator", "Rectifier"], correctIndex: 2, explanation: "Zener diode operates in reverse breakdown and maintains constant voltage across it, making it ideal as a voltage regulator.", difficulty: "Easy" },
  { id: "q87", conceptId: "semiconductors", question: "The output of an OR gate when inputs are A=1, B=0 is:", options: ["0", "1", "Undefined", "Depends on gate"], correctIndex: 1, explanation: "OR gate: output is 1 if ANY input is 1. A+B = 1+0 = 1", difficulty: "Easy" },

  // ============ VECTORS (4 questions) ============
  { id: "q88", conceptId: "kinematics", question: "Two vectors of magnitude 3 and 4 are perpendicular. What is the magnitude of their resultant?", options: ["1", "5", "7", "12"], correctIndex: 1, explanation: "R = √(A² + B² + 2ABcosθ) = √(9 + 16 + 0) = √25 = 5 (Pythagorean theorem when θ = 90°)", difficulty: "Easy" },
  { id: "q89", conceptId: "kinematics", question: "The cross product of two parallel vectors is:", options: ["Maximum", "Zero", "Equal to their dot product", "Undefined"], correctIndex: 1, explanation: "A × B = ABsinθ. For parallel vectors θ = 0°, so sin0° = 0. Cross product is zero.", difficulty: "Easy" },
  { id: "q90", conceptId: "kinematics", question: "If A·B = |A||B|, then the angle between A and B is:", options: ["0°", "45°", "90°", "180°"], correctIndex: 0, explanation: "A·B = |A||B|cosθ. Given A·B = |A||B| → cosθ = 1 → θ = 0° (vectors are parallel)", difficulty: "Easy" },
  { id: "q91", conceptId: "kinematics", question: "A vector A = 3i + 4j. Its unit vector is:", options: ["3i + 4j", "(3i + 4j)/5", "(3i + 4j)/7", "(3i + 4j)/25"], correctIndex: 1, explanation: "|A| = √(9+16) = 5. Unit vector = A/|A| = (3i + 4j)/5", difficulty: "Easy" },
];

// ============ FLASHCARDS ============
export const flashcards: Flashcard[] = [
  // KINEMATICS
  { id: "f1", conceptId: "kinematics", front: "What are the three equations of motion?", back: "1) v = u + at\n2) s = ut + ½at²\n3) v² = u² + 2as\n\nwhere u = initial velocity, v = final velocity, a = acceleration, s = displacement, t = time", category: "Kinematics" },
  { id: "f2", conceptId: "kinematics", front: "At what angle is the range of a projectile maximum?", back: "45° — At this angle, sin2θ = sin90° = 1 (maximum value)\n\nR_max = u²/g", category: "Kinematics" },
  { id: "f3", conceptId: "kinematics", front: "What is the relation between time of flight and maximum height in projectile motion?", back: "H = gT²/8\n\nAlso: T = 2usinθ/g and H = u²sin²θ/2g", category: "Kinematics" },
  // LAWS OF MOTION
  { id: "f4", conceptId: "laws-of-motion", front: "State Newton's Second Law of Motion", back: "The rate of change of momentum of a body is directly proportional to the applied force and takes place in the direction of the force.\n\nF = dp/dt = ma (when mass is constant)", category: "Laws of Motion" },
  { id: "f5", conceptId: "laws-of-motion", front: "What is the condition for banking of roads without friction?", back: "tan θ = v²/rg\n\nwhere θ = banking angle, v = speed, r = radius, g = acceleration due to gravity", category: "Laws of Motion" },
  // WORK ENERGY
  { id: "f6", conceptId: "work-energy-power", front: "State the Work-Energy Theorem", back: "The net work done on a body equals the change in its kinetic energy.\n\nW_net = ΔKE = ½mv² - ½mu²", category: "Work & Energy" },
  { id: "f7", conceptId: "work-energy-power", front: "What is the difference between elastic and inelastic collision?", back: "Elastic: Both momentum AND kinetic energy are conserved\n\nInelastic: Only momentum is conserved, KE is NOT conserved\n\nPerfectly inelastic: Bodies stick together after collision", category: "Work & Energy" },
  // ROTATIONAL
  { id: "f8", conceptId: "rotational-motion", front: "What is the moment of inertia of common shapes?", back: "Ring: MR²\nDisc: ½MR²\nSolid sphere: ⅖MR²\nHollow sphere: ⅔MR²\nRod (center): ML²/12\nRod (end): ML²/3", category: "Rotational Motion" },
  // GRAVITATION
  { id: "f9", conceptId: "gravitation", front: "State Kepler's Three Laws of Planetary Motion", back: "1st Law (Orbits): Planets move in elliptical orbits with Sun at one focus\n\n2nd Law (Areas): Line joining planet and Sun sweeps equal areas in equal times\n\n3rd Law (Periods): T² ∝ a³ (square of period proportional to cube of semi-major axis)", category: "Gravitation" },
  // THERMODYNAMICS
  { id: "f10", conceptId: "thermodynamics", front: "Compare isothermal and adiabatic processes", back: "Isothermal: T = constant, PV = constant, slow process\nWork = nRT ln(V₂/V₁)\n\nAdiabatic: Q = 0, PV^γ = constant, fast process\nWork = (P₁V₁ - P₂V₂)/(γ-1)", category: "Thermodynamics" },
  // OSCILLATIONS
  { id: "f11", conceptId: "oscillations", front: "What are the conditions for Simple Harmonic Motion?", back: "1. Restoring force proportional to displacement: F = -kx\n2. Acceleration directed towards mean position: a = -ω²x\n3. Motion is periodic and oscillatory\n\nAt mean position: v = max, a = 0\nAt extreme: v = 0, a = max", category: "Oscillations" },
  // ELECTROSTATICS
  { id: "f12", conceptId: "electrostatics", front: "State Gauss's Law and its applications", back: "∮E·dA = q_enclosed/ε₀\n\nApplications:\n• Infinite line charge: E = λ/2πε₀r\n• Infinite plane: E = σ/2ε₀\n• Sphere (outside): E = kQ/r²\n• Sphere (inside): E = 0 (conductor)", category: "Electrostatics" },
  // CURRENT ELECTRICITY
  { id: "f13", conceptId: "current-electricity", front: "State Kirchhoff's Laws", back: "Junction Rule (KCL): Sum of currents entering a junction = Sum of currents leaving\nΣI_in = ΣI_out (charge conservation)\n\nLoop Rule (KVL): Sum of potential differences around any closed loop = 0\nΣV = 0 (energy conservation)", category: "Current Electricity" },
  // MAGNETIC
  { id: "f14", conceptId: "magnetic-effects", front: "What is the Lorentz Force?", back: "F = q(E + v × B)\n\nForce on a moving charge in both electric and magnetic fields.\n\nMagnetic force alone: F = qvBsinθ\nDirection: Right-hand rule (perpendicular to both v and B)", category: "Magnetism" },
  // EMI
  { id: "f15", conceptId: "electromagnetic-induction", front: "State Faraday's Law and Lenz's Law", back: "Faraday's Law: Induced EMF = -dΦ/dt\n(EMF equals negative rate of change of magnetic flux)\n\nLenz's Law: Direction of induced current opposes the change in flux that produces it\n(The negative sign in Faraday's law)", category: "EMI" },
  // RAY OPTICS
  { id: "f16", conceptId: "ray-optics", front: "What is Total Internal Reflection?", back: "When light travels from denser to rarer medium at angle greater than critical angle, it is completely reflected back.\n\nConditions:\n1. Light must go from denser to rarer medium\n2. Angle of incidence > Critical angle\n\nsin C = n₂/n₁ = 1/n (when rarer medium is air)", category: "Ray Optics" },
  // MODERN PHYSICS
  { id: "f17", conceptId: "modern-physics", front: "Explain the Photoelectric Effect", back: "When light of sufficient frequency falls on a metal surface, electrons are emitted.\n\nEinstein's equation: KE_max = hf - φ\n\nKey observations:\n• KE depends on frequency, NOT intensity\n• Intensity affects number of electrons\n• Below threshold frequency, no emission regardless of intensity\n• Emission is instantaneous", category: "Modern Physics" },
  { id: "f18", conceptId: "modern-physics", front: "What is de Broglie wavelength?", back: "Every moving particle has an associated wavelength:\n\nλ = h/mv = h/p\n\nFor electron accelerated through V volts:\nλ = 1.226/√V nm\n\nThis wave-particle duality is fundamental to quantum mechanics.", category: "Modern Physics" },
  // SEMICONDUCTORS
  { id: "f19", conceptId: "semiconductors", front: "What are universal logic gates?", back: "NAND and NOR are universal gates — any logic function can be built using only NAND gates or only NOR gates.\n\nNAND: Output is LOW only when ALL inputs are HIGH\nNOR: Output is HIGH only when ALL inputs are LOW\n\nDe Morgan's theorems connect AND/OR with NAND/NOR", category: "Semiconductors" },
  { id: "f20", conceptId: "semiconductors", front: "Explain p-n junction diode behavior", back: "Forward Bias: P connected to +ve, N to -ve\n→ Barrier reduced, current flows easily\n\nReverse Bias: P connected to -ve, N to +ve\n→ Barrier increased, only tiny leakage current\n\nBreakdown: At high reverse voltage, current suddenly increases (Zener/Avalanche)", category: "Semiconductors" },
  // ADDITIONAL FLASHCARDS — KINEMATICS
  { id: "f21", conceptId: "kinematics", front: "What is the condition for a body to have zero velocity but non-zero acceleration?", back: "At the highest point of vertical throw:\nv = 0 but a = g (downward)\n\nAt extreme position in SHM:\nv = 0 but a = -ω²A (maximum)", category: "Kinematics" },
  { id: "f22", conceptId: "kinematics", front: "What is relative velocity? Give the river-boat formula.", back: "Relative velocity of A w.r.t. B: v_AB = v_A - v_B\n\nRiver-boat:\n• Minimum time: swim perpendicular to river → t = d/v_boat\n• Minimum drift: swim at angle upstream → sinθ = v_river/v_boat", category: "Kinematics" },
  // LAWS OF MOTION
  { id: "f23", conceptId: "laws-of-motion", front: "What is a pseudo force? When do we use it?", back: "A fictitious force applied in a non-inertial frame to apply Newton's laws.\n\nF_pseudo = -ma₀ (opposite to acceleration of frame)\n\nUsed when observer is in accelerating frame (elevator, rotating platform, etc.)", category: "Laws of Motion" },
  { id: "f24", conceptId: "laws-of-motion", front: "What is the difference between static and kinetic friction?", back: "Static friction (fₛ):\n• Acts when body is at rest\n• Self-adjusting: 0 ≤ fₛ ≤ μₛN\n• Maximum value = μₛN\n\nKinetic friction (fₖ):\n• Acts when body is sliding\n• Constant: fₖ = μₖN\n• Always: μₖ < μₛ", category: "Laws of Motion" },
  // WORK ENERGY
  { id: "f25", conceptId: "work-energy-power", front: "What is the relation between force and potential energy?", back: "F = -dU/dx\n\nForce is the negative gradient of potential energy.\n\nAt equilibrium: F = 0 → dU/dx = 0\n• Stable: d²U/dx² > 0 (minimum PE)\n• Unstable: d²U/dx² < 0 (maximum PE)", category: "Work & Energy" },
  // ROTATIONAL
  { id: "f26", conceptId: "rotational-motion", front: "State the Parallel Axis Theorem and Perpendicular Axis Theorem", back: "Parallel Axis: I = I_cm + Md²\n(I about any axis = I about CM + Md²)\n\nPerpendicular Axis (for laminar bodies only):\nI_z = I_x + I_y\n(Moment about axis ⊥ to plane = sum of moments about two ⊥ axes in the plane)", category: "Rotational Motion" },
  { id: "f27", conceptId: "rotational-motion", front: "What is the condition for pure rolling?", back: "v_cm = Rω (no slipping)\n\nAcceleration: a_cm = Rα\n\nFriction acts to prevent slipping but does no work in pure rolling.\n\nKE = ½mv² + ½Iω² = ½mv²(1 + k²/R²)", category: "Rotational Motion" },
  // GRAVITATION
  { id: "f28", conceptId: "gravitation", front: "Compare orbital velocity and escape velocity", back: "Orbital velocity: v₀ = √(gR) ≈ 7.9 km/s\n(for orbit close to Earth)\n\nEscape velocity: vₑ = √(2gR) ≈ 11.2 km/s\n\nRelation: vₑ = √2 × v₀\n\nEscape velocity is independent of mass and direction of projection.", category: "Gravitation" },
  // THERMODYNAMICS
  { id: "f29", conceptId: "thermodynamics", front: "What is the First Law of Thermodynamics?", back: "ΔU = Q - W\n\nChange in internal energy = Heat added - Work done by gas\n\nSign convention:\n• Q > 0: heat absorbed\n• Q < 0: heat released\n• W > 0: work done by gas (expansion)\n• W < 0: work done on gas (compression)", category: "Thermodynamics" },
  { id: "f30", conceptId: "thermodynamics", front: "What are the degrees of freedom for different gases?", back: "Monoatomic: f = 3 (translation only), γ = 5/3\n\nDiatomic (room temp): f = 5 (3 trans + 2 rot), γ = 7/5\n\nDiatomic (high temp): f = 7 (3 trans + 2 rot + 2 vib), γ = 9/7\n\nCv = fR/2, Cp = (f+2)R/2", category: "Thermodynamics" },
  // OSCILLATIONS
  { id: "f31", conceptId: "oscillations", front: "What is the energy in SHM?", back: "KE = ½mω²(A² - x²) → max at mean position\nPE = ½mω²x² → max at extreme\nTotal E = ½mω²A² = constant\n\nKE = PE at x = A/√2\n\nAverage KE = Average PE = E/2 (over one cycle)", category: "Oscillations" },
  // WAVES
  { id: "f32", conceptId: "waves", front: "What is the Doppler Effect formula for sound?", back: "f' = f × (v ± v_observer)/(v ∓ v_source)\n\nUpper signs: approaching (frequency increases)\nLower signs: receding (frequency decreases)\n\nv = speed of sound, v_o = observer speed, v_s = source speed", category: "Waves" },
  // ELECTROSTATICS
  { id: "f33", conceptId: "electrostatics", front: "What is an electric dipole? Give its field expressions.", back: "Two equal and opposite charges separated by distance 2a.\nDipole moment: p = q × 2a (direction: -q to +q)\n\nAxial point: E = 2kp/r³\nEquatorial point: E = kp/r³\n\nTorque in uniform field: τ = p × E = pEsinθ", category: "Electrostatics" },
  { id: "f34", conceptId: "electrostatics", front: "What is the energy stored in a capacitor?", back: "U = ½CV² = ½QV = Q²/2C\n\nEnergy density (energy per unit volume):\nu = ½ε₀E²\n\nFor parallel plate: C = ε₀A/d\nWith dielectric: C = Kε₀A/d", category: "Electrostatics" },
  // CURRENT ELECTRICITY
  { id: "f35", conceptId: "current-electricity", front: "What is the Wheatstone Bridge condition?", back: "Balance condition: P/Q = R/S\n\nWhen balanced:\n• No current through galvanometer\n• Can be used to find unknown resistance\n\nMeter bridge is a practical form of Wheatstone bridge:\nR/S = l/(100-l)", category: "Current Electricity" },
  // MAGNETISM
  { id: "f36", conceptId: "magnetic-effects", front: "What is the force on a current-carrying conductor in a magnetic field?", back: "F = IL × B = BILsinθ\n\nDirection: Fleming's Left Hand Rule\n• Index finger → B\n• Middle finger → I\n• Thumb → F\n\nForce is maximum when wire is ⊥ to B (θ = 90°)\nForce is zero when wire is ∥ to B (θ = 0°)", category: "Magnetism" },
  { id: "f37", conceptId: "magnetic-effects", front: "Compare Biot-Savart Law and Ampere's Law", back: "Biot-Savart: dB = (μ₀/4π)(Idl × r̂)/r²\n• Used for any current configuration\n• Analogous to Coulomb's law\n\nAmpere's Law: ∮B·dl = μ₀I_enclosed\n• Used when symmetry exists\n• Analogous to Gauss's law\n• Applications: solenoid, toroid, infinite wire", category: "Magnetism" },
  // EMI
  { id: "f38", conceptId: "electromagnetic-induction", front: "What is self-inductance and mutual inductance?", back: "Self-inductance (L):\nΦ = LI, EMF = -LdI/dt\nEnergy = ½LI²\n\nMutual inductance (M):\nΦ₂ = MI₁, EMF₂ = -MdI₁/dt\n\nFor solenoid: L = μ₀n²Al\nCoupling: M = k√(L₁L₂), 0 ≤ k ≤ 1", category: "EMI" },
  // RAY OPTICS
  { id: "f39", conceptId: "ray-optics", front: "What is the lens maker's equation?", back: "1/f = (n-1)[1/R₁ - 1/R₂]\n\nwhere n = refractive index of lens\nR₁, R₂ = radii of curvature\n\nThin lens formula: 1/v - 1/u = 1/f\nMagnification: m = v/u\nPower: P = 1/f (in diopters when f in meters)", category: "Ray Optics" },
  { id: "f40", conceptId: "ray-optics", front: "What is YDSE (Young's Double Slit Experiment)?", back: "Two coherent sources create interference pattern.\n\nFringe width: β = λD/d\nBright fringe: path diff = nλ\nDark fringe: path diff = (2n-1)λ/2\n\nIntensity: I = 4I₀cos²(δ/2)\nwhere δ = 2πd sinθ/λ", category: "Ray Optics" },
  // MODERN PHYSICS
  { id: "f41", conceptId: "modern-physics", front: "What are the Bohr model postulates and results?", back: "Postulates:\n1. Electrons orbit in fixed orbits\n2. Angular momentum quantized: L = nh/2π\n3. Energy emitted/absorbed in quanta: E = hf\n\nResults for hydrogen:\n• rₙ = 0.53n² Å\n• Eₙ = -13.6/n² eV\n• vₙ = 2.18×10⁶/n m/s", category: "Modern Physics" },
  { id: "f42", conceptId: "modern-physics", front: "What is radioactive decay law?", back: "N = N₀e^(-λt)\n\nHalf-life: T₁/₂ = 0.693/λ\nMean life: τ = 1/λ = T₁/₂/0.693\n\nActivity: A = λN = A₀e^(-λt)\n\nTypes: α (He nucleus), β⁻ (electron), β⁺ (positron), γ (photon)", category: "Modern Physics" },
];
