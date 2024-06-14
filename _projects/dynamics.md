---
layout: page
title: Carrier Transport
description: predicting charge, spin, and energy transfer rates
img: assets/img/dynamics.jpg
importance: 1
category: development
#redirect: external website url
---

<p style="text-align:center;"><img src="/assets/img/dynamics.jpg" height="250" width="250" alt="Logo"></p>

Understanding charge, spin, and energy transfer processes and predicting their rates is of utmost importance in a wide range of applications like electrochemistry, photochemistry, reaction engineering, catalysis, photovoltaics etc.

Solving the time-dependent Schrödinger equation

$$ \hat{H} \Psi(\mathbf{r}, t) = i\hbar \frac{\partial}{\partial t} \Psi(\mathbf{r}, t) $$

allows us to look at the time-evolution/ dynamics of a system. Identifying the reaction coordinate and performing full-quantum or mixed quantum-classical dynamics can be extremely challenging in complex systems. I am interested in predicting dynamical properties of a system without performing dynamics calculations; for which I often rely on formulations derived from equilibrium and non-equilibrium Fermi's Golden Rule (FGR).

FGR provides a simple expression for transition probability $$P_f$$ between an initial $${\ket i}$$ and final $${\ket f}$$ state. The transition rate $${\Gamma_{i\to f}=\frac{P_f}{t}}$$ can be calculated for different types of perturbations in the Hamiltonian.

$$\Gamma_{i\to f}=\frac{2\pi}{\hbar}|{\bra f}{H'}{\ket i}|^{2}\rho(E_{i})$$

For charge transfer processes, FGR can be expressed in terms of chemically relevant parameters (Marcus Theory)

$$\Gamma_{ET}=\frac{2\pi|J|^{2}}{\hbar{\sqrt{4\pi\lambda k_{B}T}}} e^{-\frac{(\Delta G+\lambda)^{2}}{4\lambda k_{B}T}}$$

Similar rates can be calculated for phenomena like resonant tunneling, spin flip, spin transfer, energy transfer etc by varying the Hamiltonians and perturbations appropriately. A big focus of my research has been on development of theoretical and computational frameworks to make these computations more tractable for systems of increasing size and complexity.

The electron transfer rate equation can be revised to include effects of thermal fluctuations and vibrational motion of the molecule as

$$\Gamma_{ET}=\frac{\pi|\sum_{i=1}^{N_{config}}Je^{-\frac{E_{i}}{k{B}T}}|^{2}}{\hbar{\sqrt{\pi\lambda_{s} k_{B}T}}} e^\left({\sum_{j=1}^{N_{modes}}-S_{j}}\right)\sum_{\nu_{1}=1}^{\infty}\sum_{\nu_{2}=1}^{\infty}...\sum_{\nu_{N}=1}^{\infty}\left(\prod_{j=1}^{N}\left(\frac{S_{j}^{\nu_i}}{\nu{i}!} \right)   e^{-\frac{(\Delta G+\lambda_{s}+\sum_{j=1}^{N}\hbar\omega_{j}\nu_{j})^{2}}{4\lambda_{s} k_{B}T}}\right)$$

which, for real molecules with large number of degrees of freedom becomes intractable to compute numerically. I use a combination of electronic structure, molecular dynamics, stochastic methods and machine learning algorithms to perform these calculations for complex systems.

Some of problems that I am currently working on are\
– Long range charge transfer in soft matter\
– Chirality induced spin selectivity\
– Vibronic effects on charge transfer\
– Charge transfer in strongly coupled systems\
– Reactive force field design for charge-transfer reactions\
– Magnon-photon-phonon interactions\
– Magnons to address spin qubits\
– Spin logic
