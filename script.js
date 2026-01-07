// script.js - DIPERBAIKI DAN DIGABUNGKAN
document.addEventListener('DOMContentLoaded', function() {
    // ===== MOBILE MENU FUNCTIONALITY =====
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

    function openMenu() {
        mobileMenu.classList.remove('scale-95', 'opacity-0', 'pointer-events-none');
        mobileMenu.classList.add('scale-100', 'opacity-100');
        mobileMenuOverlay.classList.remove('hidden');
    }

    function closeMenu() {
        mobileMenu.classList.add('scale-95', 'opacity-0', 'pointer-events-none');
        mobileMenu.classList.remove('scale-100', 'opacity-100');
        mobileMenuOverlay.classList.add('hidden');
    }

    if (mobileBtn) {
        mobileBtn.addEventListener('click', openMenu);
    }

    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', closeMenu);
    }

    // Close menu when clicking on mobile menu links
    if (mobileMenu) {
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    // Close menu on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) closeMenu();
    });

    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ===== ACTIVE NAV LINK ON SCROLL =====
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-indigo-600', 'font-semibold');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('text-indigo-600', 'font-semibold');
            }
        });
    });

    // ===== FADE-IN ANIMATION =====
    const elements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-active');
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));

    // ===== DATA RTLH KABUPATEN KENDAL =====
    // Data yang lebih realistis dan konsisten
  // Data RTLH Kabupaten Kendal - DIPERBAIKI SESUAI EXCEL
// Data RTLH Kabupaten Kendal - DIPERBAIKI SESUAI EXCEL 2024
const dataRTLH = [
    { kecamatan: "Plantungan", rtlh2023: 2830, rtlh2024: 2651, realisasi2023: 97, realisasi2024: 65 },
    { kecamatan: "Sukorejo", rtlh2023: 2845, rtlh2024: 2720, realisasi2023: 57, realisasi2024: 65 },
    { kecamatan: "Pageruyung", rtlh2023: 1687, rtlh2024: 1532, realisasi2023: 47, realisasi2024: 149 },
    { kecamatan: "Patean", rtlh2023: 2175, rtlh2024: 2041, realisasi2023: 99, realisasi2024: 99 },
    { kecamatan: "Singorojo", rtlh2023: 1991, rtlh2024: 1917, realisasi2023: 62, realisasi2024: 59 },
    { kecamatan: "Limbangan", rtlh2023: 691, rtlh2024: 633, realisasi2023: 55, realisasi2024: 36 },
    { kecamatan: "Boja", rtlh2023: 1016, rtlh2024: 919, realisasi2023: 107, realisasi2024: 40 },
    { kecamatan: "Kaliwungu", rtlh2023: 1235, rtlh2024: 1173, realisasi2023: 4, realisasi2024: 25 },
    { kecamatan: "Kaliwungu Selatan", rtlh2023: 1815, rtlh2024: 1760, realisasi2023: 58, realisasi2024: 91 },
    { kecamatan: "Brangsong", rtlh2023: 2240, rtlh2024: 2183, realisasi2023: 91, realisasi2024: 134 },
    { kecamatan: "Pegandon", rtlh2023: 1512, rtlh2024: 1492, realisasi2023: 155, realisasi2024: 142 },
    { kecamatan: "Ngampel", rtlh2023: 1431, rtlh2024: 1340, realisasi2023: 134, realisasi2024: 50 },
    { kecamatan: "Gemuh", rtlh2023: 2401, rtlh2024: 2302, realisasi2023: 76, realisasi2024: 126 },
    { kecamatan: "Ringinarum", rtlh2023: 1726, rtlh2024: 1599, realisasi2023: 20, realisasi2024: 140 },
    { kecamatan: "Weleri", rtlh2023: 2343, rtlh2024: 2309, realisasi2023: 179, realisasi2024: 25 },
    { kecamatan: "Rowosari", rtlh2023: 2527, rtlh2024: 2479, realisasi2023: 127, realisasi2024: 172 },
    { kecamatan: "Kangkung", rtlh2023: 2242, rtlh2024: 2135, realisasi2023: 48, realisasi2024: 46 },
    { kecamatan: "Cepiring", rtlh2023: 1118, rtlh2024: 1071, realisasi2023: 74, realisasi2024: 60 },
    { kecamatan: "Patebon", rtlh2023: 1466, rtlh2024: 1390, realisasi2023: 125, realisasi2024: 116 },
    { kecamatan: "Kendal", rtlh2023: 772, rtlh2024: 768, realisasi2023: 34, realisasi2024: 6 }
];

    // Hitung total
    let totalRTLH2023 = 0;
    let totalRTLH2024 = 0;
    let totalRealisasi2023 = 0;
    let totalRealisasi2024 = 0;

    dataRTLH.forEach(item => {
        totalRTLH2023 += item.rtlh2023;
        totalRTLH2024 += item.rtlh2024;
        totalRealisasi2023 += item.realisasi2023;
        totalRealisasi2024 += item.realisasi2024;
    });

    const totalSisa2023 = totalRTLH2023 - totalRealisasi2023;
    const totalSisa2024 = totalRTLH2024 - totalRealisasi2024;
    const persenRealisasi2023 = ((totalRealisasi2023 / totalRTLH2023) * 100).toFixed(2);
    const persenRealisasi2024 = ((totalRealisasi2024 / totalRTLH2024) * 100).toFixed(2);

    // Update statistik cards 2024
    const totalRTLH2024El = document.getElementById('totalRTLH2024');
    const realisasi2024El = document.getElementById('realisasi2024');
    const sisaRTLH2024El = document.getElementById('sisaRTLH2024');

    if (totalRTLH2024El) totalRTLH2024El.textContent = totalRTLH2024.toLocaleString();
    if (realisasi2024El) realisasi2024El.textContent = totalRealisasi2024.toLocaleString();
    if (sisaRTLH2024El) sisaRTLH2024El.textContent = totalSisa2024.toLocaleString();

    // Update statistik cards 2023
    const totalRTLH2023El = document.getElementById('totalRTLH2023');
    const realisasi2023El = document.getElementById('realisasi2023');
    const sisaRTLH2023El = document.getElementById('sisaRTLH2023');
    const persenRealisasi2023El = document.getElementById('persenRealisasi2023');

    if (totalRTLH2023El) totalRTLH2023El.textContent = totalRTLH2023.toLocaleString();
    if (realisasi2023El) realisasi2023El.textContent = totalRealisasi2023.toLocaleString();
    if (sisaRTLH2023El) sisaRTLH2023El.textContent = totalSisa2023.toLocaleString();
    if (persenRealisasi2023El) persenRealisasi2023El.textContent = `${persenRealisasi2023}%`;

    // ===== ISI TABEL DATA 2024 =====
    const tabelBody = document.getElementById('tabelData2024');
    if (tabelBody) {
        let totalRTLHTabel = 0, totalRealisasiTabel = 0, totalSisaTabel = 0;

        dataRTLH.forEach((item, index) => {
            const sisa = item.rtlh2024 - item.realisasi2024;
            const persen = ((item.realisasi2024 / item.rtlh2024) * 100).toFixed(2);
            
            totalRTLHTabel += item.rtlh2024;
            totalRealisasiTabel += item.realisasi2024;
            totalSisaTabel += sisa;

            const row = document.createElement('tr');
            row.className = index % 2 === 0 ? 'bg-white' : 'bg-gray-50';
            row.innerHTML = `
                <td class="px-4 py-3 text-sm text-gray-700">${index + 1}</td>
                <td class="px-4 py-3 text-sm font-medium text-gray-900">${item.kecamatan}</td>
                <td class="px-4 py-3 text-sm text-gray-700">${item.rtlh2024.toLocaleString()}</td>
                <td class="px-4 py-3 text-sm text-green-600 font-medium">${item.realisasi2024.toLocaleString()}</td>
                <td class="px-4 py-3 text-sm text-red-600">${sisa.toLocaleString()}</td>
                <td class="px-4 py-3 text-sm font-medium ${parseFloat(persen) > 5 ? 'text-green-600' : 'text-orange-600'}">${persen}%</td>
            `;
            tabelBody.appendChild(row);
        });

        // Update footer tabel
        const totalRTLHFooter = document.getElementById('totalRTLHFooter');
        const totalRealisasiFooter = document.getElementById('totalRealisasiFooter');
        const totalSisaFooter = document.getElementById('totalSisaFooter');
        const totalPersenFooter = document.getElementById('totalPersenFooter');

        if (totalRTLHFooter) totalRTLHFooter.textContent = totalRTLHTabel.toLocaleString();
        if (totalRealisasiFooter) totalRealisasiFooter.textContent = totalRealisasiTabel.toLocaleString();
        if (totalSisaFooter) totalSisaFooter.textContent = totalSisaTabel.toLocaleString();
        if (totalPersenFooter) totalPersenFooter.textContent = `${((totalRealisasiTabel / totalRTLHTabel) * 100).toFixed(2)}%`;
    }

    // ===== CHART FUNCTIONS =====
    function createBarChart(canvasId, labels, data, label, color) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return null;

        return new Chart(ctx, {
            type: "bar",
            data: {
                labels: labels,
                datasets: [{
                    label: label,
                    data: data,
                    backgroundColor: color,
                    borderColor: color.replace('0.7', '1'),
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${label}: ${context.raw.toLocaleString()}`;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        title: { display: true, text: "Kecamatan" },
                        ticks: {
                            maxRotation: 60,
                            minRotation: 30,
                            autoSkip: false,
                            font: { size: window.innerWidth < 600 ? 10 : 12 }
                        }
                    },
                    y: {
                        title: { display: true, text: label },
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return value.toLocaleString();
                            }
                        }
                    }
                }
            }
        });
    }

    function createPieChart(canvasId, labels, data, label) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return null;

        const colors = [
            "#6366f1","#818cf8","#a5b4fc","#f59e42","#fbbf24","#34d399","#10b981","#f472b6",
            "#f87171","#60a5fa","#38bdf8","#f43f5e","#a3e635","#fde68a","#fca5a5","#c7d2fe",
            "#fcd34d","#f9fafb","#d1fae5","#f3f4f6"
        ];

        return new Chart(ctx, {
            type: "pie",
            data: {
                labels: labels,
                datasets: [{
                    label: label,
                    data: data,
                    backgroundColor: colors.slice(0, labels.length)
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: window.innerWidth < 600 ? 'bottom' : 'right',
                        labels: { 
                            font: { size: window.innerWidth < 600 ? 10 : 12 },
                            padding: 15
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.raw || 0;
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = Math.round((value / total) * 100);
                                return `${label}: ${value.toLocaleString()} (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });
    }

    function createLineChart(canvasId, labels, datasets) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return null;

        return new Chart(ctx, {
            type: "line",
            data: {
                labels: labels,
                datasets: datasets
            },
            options: {
                responsive: true,
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: ${context.raw.toLocaleString()}`;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            maxRotation: 60,
                            minRotation: 30,
                            autoSkip: false,
                            font: { size: window.innerWidth < 600 ? 10 : 12 }
                        }
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return value.toLocaleString();
                            }
                        }
                    }
                }
            }
        });
    }

    // ===== INITIALIZE CHARTS =====
    const kecamatanLabels = dataRTLH.map(d => d.kecamatan);
    const rtlhData2024 = dataRTLH.map(d => d.rtlh2024);
    const realisasiData2024 = dataRTLH.map(d => d.realisasi2024);
    const rtlhData2023 = dataRTLH.map(d => d.rtlh2023);
    const realisasiData2023 = dataRTLH.map(d => d.realisasi2023);

    // Chart 1: RTLH 2024
    createBarChart("rtlhChart2024", kecamatanLabels, rtlhData2024, "Jumlah RTLH 2024", "rgba(79,70,229,0.7)");

    // Chart 2: Perbandingan RTLH vs Realisasi 2024
    createLineChart("perbandinganChart2024", kecamatanLabels, [
        {
            label: "RTLH 2024",
            data: rtlhData2024,
            borderColor: "rgba(239,68,68,0.8)",
            backgroundColor: "rgba(239,68,68,0.1)",
            borderWidth: 2,
            tension: 0.3
        },
        {
            label: "Realisasi 2024",
            data: realisasiData2024,
            borderColor: "rgba(34,197,94,0.8)",
            backgroundColor: "rgba(34,197,94,0.1)",
            borderWidth: 2,
            tension: 0.3
        }
    ]);

    // Chart 3: RTLH 2023
    createBarChart("rtlhChart2023", kecamatanLabels, rtlhData2023, "Jumlah RTLH 2023", "rgba(99,102,241,0.7)");

    // Chart 4: Realisasi 2023 (Pie Chart)
    createPieChart("realisasiChart2023", kecamatanLabels, realisasiData2023, "Realisasi 2023");

    // Chart 5: Perbandingan Tahunan
    const ctxPerbandinganTahunan = document.getElementById("perbandinganTahunanChart");
    if (ctxPerbandinganTahunan) {
        new Chart(ctxPerbandinganTahunan, {
            type: "bar",
            data: {
                labels: ["Total RTLH", "Total Realisasi", "Sisa RTLH"],
                datasets: [
                    {
                        label: "Tahun 2023",
                        data: [totalRTLH2023, totalRealisasi2023, totalSisa2023],
                        backgroundColor: "rgba(99,102,241,0.7)",
                        borderColor: "rgba(99,102,241,1)",
                        borderWidth: 1
                    },
                    {
                        label: "Tahun 2024",
                        data: [totalRTLH2024, totalRealisasi2024, totalSisa2024],
                        backgroundColor: "rgba(34,197,94,0.7)",
                        borderColor: "rgba(34,197,94,1)",
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return value.toLocaleString();
                            }
                        }
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: ${context.raw.toLocaleString()}`;
                            }
                        }
                    }
                }
            }
        });
    }
});