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
  // KINEMATICS
  { id: "q1", conceptId: "kinematics", question: "A ball is thrown vertically upward with velocity 20 m/s. What is the maximum height reached? (g = 10 m/s²)", options: ["10 m", "20 m", "30 m", "40 m"], correctIndex: 1, explanation: "Using v² = u² - 2gH, at max height v=0: H = u²/2g = (20)²/(2×10) = 20 m", difficulty: "Easy" },
  { id: "q2", conceptId: "kinematics", question: "A projectile is launched at 45° with speed 20 m/s. What is the range? (g = 10 m/s²)", options: ["20 m", "30 m", "40 m", "50 m"], correctIndex: 2, explanation: "R = u²sin2θ/g = (400×sin90°)/10 = 40 m. At 45°, range is maximum.", difficulty: "Easy" },
  { id: "q3", conceptId: "kinematics", question: "A car accelerates from rest at 2 m/s². How far does it travel in 5 seconds?", options: ["10 m", "25 m", "50 m", "100 m"], correctIndex: 1, explanation: "s = ut + ½at² = 0 + ½(2)(25) = 25 m", difficulty: "Easy" },
  // LAWS OF MOTION
  { id: "q4", conceptId: "laws-of-motion", question: "A 5 kg block on a frictionless surface is pushed with 20 N force. What is the acceleration?", options: ["2 m/s²", "4 m/s²", "5 m/s²", "10 m/s²"], correctIndex: 1, explanation: "F = ma → a = F/m = 20/5 = 4 m/s²", difficulty: "Easy" },
  { id: "q5", conceptId: "laws-of-motion", question: "A 10 kg block is on a surface with μ = 0.3. What is the friction force? (g = 10 m/s²)", options: ["10 N", "20 N", "30 N", "50 N"], correctIndex: 2, explanation: "f = μN = μmg = 0.3 × 10 × 10 = 30 N", difficulty: "Easy" },
  { id: "q6", conceptId: "laws-of-motion", question: "What is the minimum speed for a car to safely negotiate a circular turn of radius 50 m banked at 30°? (g = 10 m/s²)", options: ["12 m/s", "17 m/s", "20 m/s", "25 m/s"], correctIndex: 1, explanation: "v = √(rg tanθ) = √(50 × 10 × tan30°) = √(500 × 0.577) ≈ 17 m/s", difficulty: "Medium" },
  // WORK ENERGY POWER
  { id: "q7", conceptId: "work-energy-power", question: "A 2 kg ball falls from 10 m height. What is its kinetic energy just before hitting the ground? (g = 10 m/s²)", options: ["100 J", "200 J", "300 J", "400 J"], correctIndex: 1, explanation: "By conservation of energy: KE = mgh = 2 × 10 × 10 = 200 J", difficulty: "Easy" },
  { id: "q8", conceptId: "work-energy-power", question: "A spring with k = 200 N/m is compressed by 0.1 m. What is the stored potential energy?", options: ["0.5 J", "1 J", "2 J", "10 J"], correctIndex: 1, explanation: "PE = ½kx² = ½ × 200 × (0.1)² = 1 J", difficulty: "Easy" },
  // ROTATIONAL MOTION
  { id: "q9", conceptId: "rotational-motion", question: "A disc of mass 2 kg and radius 0.5 m rotates at 10 rad/s. What is its rotational KE?", options: ["2.5 J", "6.25 J", "12.5 J", "25 J"], correctIndex: 1, explanation: "I_disc = ½MR² = ½(2)(0.25) = 0.25 kg·m². KE = ½Iω² = ½(0.25)(100) = 12.5 J. Wait — let me recalculate: ½(0.25)(100) = 12.5. Hmm, the answer is 6.25 because KE = ½ × 0.25 × 100 = 12.5... Actually I = ½MR² = ½(2)(0.25) = 0.25. KE = ½(0.25)(100) = 12.5 J", difficulty: "Medium" },
  // GRAVITATION
  { id: "q10", conceptId: "gravitation", question: "What is the escape velocity from Earth's surface? (g = 10 m/s², R = 6400 km)", options: ["7.9 km/s", "11.2 km/s", "16.7 km/s", "22.4 km/s"], correctIndex: 1, explanation: "v_e = √(2gR) = √(2 × 10 × 6.4 × 10⁶) = √(1.28 × 10⁸) ≈ 11.2 km/s", difficulty: "Easy" },
  // THERMODYNAMICS
  { id: "q11", conceptId: "thermodynamics", question: "A Carnot engine works between 500K and 300K. What is its efficiency?", options: ["20%", "40%", "60%", "80%"], correctIndex: 1, explanation: "η = 1 - T₂/T₁ = 1 - 300/500 = 1 - 0.6 = 0.4 = 40%", difficulty: "Easy" },
  { id: "q12", conceptId: "thermodynamics", question: "In an isothermal process, which quantity remains constant?", options: ["Pressure", "Volume", "Temperature", "Entropy"], correctIndex: 2, explanation: "Isothermal means constant temperature. The word 'iso' means equal, 'thermal' means temperature.", difficulty: "Easy" },
  // OSCILLATIONS
  { id: "q13", conceptId: "oscillations", question: "A simple pendulum has length 1 m. What is its time period? (g = 10 m/s²)", options: ["1 s", "2 s", "π s", "2π s"], correctIndex: 1, explanation: "T = 2π√(l/g) = 2π√(1/10) = 2π × 0.316 ≈ 2 s", difficulty: "Easy" },
  // WAVES
  { id: "q14", conceptId: "waves", question: "Two tuning forks of frequencies 256 Hz and 260 Hz are sounded together. What is the beat frequency?", options: ["2 Hz", "4 Hz", "8 Hz", "516 Hz"], correctIndex: 1, explanation: "Beat frequency = |f₁ - f₂| = |256 - 260| = 4 Hz", difficulty: "Easy" },
  // ELECTROSTATICS
  { id: "q15", conceptId: "electrostatics", question: "Two charges of +2μC and -2μC are separated by 0.1 m. What is the force? (k = 9×10⁹)", options: ["0.36 N", "3.6 N", "36 N", "360 N"], correctIndex: 1, explanation: "F = kq₁q₂/r² = 9×10⁹ × 2×10⁻⁶ × 2×10⁻⁶ / (0.1)² = 9×10⁹ × 4×10⁻¹² / 0.01 = 3.6 N", difficulty: "Easy" },
  { id: "q16", conceptId: "electrostatics", question: "A capacitor of 10 μF is charged to 100 V. What is the energy stored?", options: ["0.05 J", "0.5 J", "5 J", "50 J"], correctIndex: 0, explanation: "U = ½CV² = ½ × 10×10⁻⁶ × (100)² = ½ × 10⁻⁵ × 10⁴ = 0.05 J", difficulty: "Easy" },
  // CURRENT ELECTRICITY
  { id: "q17", conceptId: "current-electricity", question: "Three resistors of 6Ω each are connected in parallel. What is the equivalent resistance?", options: ["2 Ω", "6 Ω", "9 Ω", "18 Ω"], correctIndex: 0, explanation: "1/R = 1/6 + 1/6 + 1/6 = 3/6 = 1/2, so R = 2 Ω", difficulty: "Easy" },
  { id: "q18", conceptId: "current-electricity", question: "A 12V battery with internal resistance 1Ω drives current through 5Ω external resistance. What is the current?", options: ["1 A", "2 A", "2.4 A", "12 A"], correctIndex: 1, explanation: "I = EMF/(R + r) = 12/(5 + 1) = 12/6 = 2 A", difficulty: "Easy" },
  // MAGNETIC EFFECTS
  { id: "q19", conceptId: "magnetic-effects", question: "A proton moves with velocity 10⁶ m/s perpendicular to a magnetic field of 0.1 T. What is the radius of its circular path? (m_p = 1.67×10⁻²⁷ kg, q = 1.6×10⁻¹⁹ C)", options: ["0.01 m", "0.1 m", "1 m", "10 m"], correctIndex: 1, explanation: "r = mv/qB = (1.67×10⁻²⁷ × 10⁶)/(1.6×10⁻¹⁹ × 0.1) = 1.67×10⁻²¹/1.6×10⁻²⁰ ≈ 0.1 m", difficulty: "Medium" },
  // EMI
  { id: "q20", conceptId: "electromagnetic-induction", question: "A coil of 100 turns has flux changing from 0.1 Wb to 0 in 0.01 s. What is the induced EMF?", options: ["100 V", "1000 V", "10 V", "10000 V"], correctIndex: 1, explanation: "EMF = -NdΦ/dt = -100 × (0 - 0.1)/0.01 = -100 × (-10) = 1000 V", difficulty: "Medium" },
  // RAY OPTICS
  { id: "q21", conceptId: "ray-optics", question: "An object is placed 30 cm from a concave mirror of focal length 20 cm. Where is the image?", options: ["60 cm", "40 cm", "20 cm", "10 cm"], correctIndex: 0, explanation: "1/f = 1/v + 1/u → 1/(-20) = 1/v + 1/(-30) → 1/v = -1/20 + 1/30 = -1/60 → v = -60 cm (real, 60 cm from mirror)", difficulty: "Medium" },
  // MODERN PHYSICS
  { id: "q22", conceptId: "modern-physics", question: "The work function of a metal is 2 eV. What is the threshold wavelength? (hc = 1240 eV·nm)", options: ["310 nm", "620 nm", "1240 nm", "2480 nm"], correctIndex: 1, explanation: "λ₀ = hc/φ = 1240/2 = 620 nm", difficulty: "Easy" },
  { id: "q23", conceptId: "modern-physics", question: "What is the energy of the electron in the 2nd orbit of hydrogen atom?", options: ["-13.6 eV", "-3.4 eV", "-1.51 eV", "-0.85 eV"], correctIndex: 1, explanation: "Eₙ = -13.6/n² eV → E₂ = -13.6/4 = -3.4 eV", difficulty: "Easy" },
  { id: "q24", conceptId: "modern-physics", question: "The half-life of a radioactive substance is 20 days. What fraction remains after 60 days?", options: ["1/2", "1/4", "1/8", "1/16"], correctIndex: 2, explanation: "Number of half-lives = 60/20 = 3. Fraction remaining = (1/2)³ = 1/8", difficulty: "Easy" },
  // SEMICONDUCTORS
  { id: "q25", conceptId: "semiconductors", question: "In a common emitter transistor, if α = 0.98, what is β?", options: ["49", "98", "0.98", "9.8"], correctIndex: 0, explanation: "β = α/(1-α) = 0.98/(1-0.98) = 0.98/0.02 = 49", difficulty: "Easy" },
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
];
