// Specification tooltips database
const specTooltips = {
    "manufacturer": "The company that produces this component",
    "cores": "Number of physical processing cores (more cores help with multitasking)",
    "threads": "Number of threads (logical processors that help with parallel tasks)",
    "base_clock": "Default operating frequency (lower power consumption)",
    "boost_clock": "Maximum achievable frequency under load (better performance)",
    "cache": "High-speed memory on the CPU (larger cache improves performance)",
    "tdp": "Thermal Design Power - heat output in watts (higher = more cooling needed)",
    "socket": "Physical connector type (must match motherboard socket)",
    "architecture": "Microarchitecture design (newer = better efficiency/performance)",
    "lithography": "Manufacturing process in nanometers (smaller = more efficient)",
    "memory_type": "Type of RAM supported (must match motherboard and RAM type)",
    "max_memory": "Maximum RAM capacity supported by the CPU",
    "price": "Current market price (USD)",
    "release_date": "When this product was launched (newer = better support)",
    "warranty": "Manufacturer warranty period",
    "vram": "Video RAM - dedicated memory for the GPU (more = better for high resolutions)",
    "memory_interface": "Memory bus width (wider = better memory bandwidth)",
    "memory_speed": "Speed of the memory (faster = better performance)",
    "pcie_interface": "PCI Express version (newer = more bandwidth)",
    "ports": "Available display/output connections",
    "length": "Physical size of the component (check case compatibility)",
    "capacity": "Storage capacity (higher = more files/games/programs)",
    "type": "Interface type (NVMe = faster than SATA)",
    "form_factor": "Physical size standard (must fit in your case/motherboard)",
    "read_speed": "Maximum data read speed (higher = faster loading)",
    "write_speed": "Maximum data write speed (higher = faster saves/transfers)",
    "endurance": "Total bytes written rating (higher = longer lifespan)",
    "controller": "The chip that manages the storage operations",
    "nand_type": "Flash memory technology (QLC = cheaper, TLC = better endurance)",
    "dram_cache": "Presence of DRAM cache (improves performance and longevity)",
    "encryption": "Hardware encryption support (better security)",
    "chipset": "Motherboard chipset (determines features and CPU compatibility)",
    "memory_slots": "Number of RAM slots (more = higher max capacity)",
    "pcie_slots": "Number of PCIe expansion slots (for GPUs and other cards)",
    "m2_slots": "Number of M.2 slots (for fast NVMe SSDs)",
    "sata_ports": "Number of SATA ports (for drives and optical drives)",
    "usb_ports": "Number and type of USB ports",
    "wifi": "Wireless networking capabilities",
    "bluetooth": "Bluetooth version (newer = better features/range)",
    "audio": "Audio system quality (important for audiophiles)",
    "rgb": "RGB lighting support (for aesthetics)"
};

// Enhanced database of computer parts with more details
const partsDatabase = {
    cpu: [
        {
            id: "cpu1",
            name: "Intel Core i9-13900K",
            image: "https://images.unsplash.com/photo-1592155931584-901ac15763e3?q=80&w=1470&auto=format&fit=crop",
            category: "CPU",
            brand: "Intel",
            performanceScore: 98,
            powerScore: 85,
            valueScore: 75,
            popularity: 95,
            buyLinks: {
                amazon: { url: "https://www.amazon.com/Intel-i9-13900K-Desktop-Processor-P-cores/dp/B0BCF54SR1", price: 589 },
                newegg: { url: "https://www.newegg.com/intel-core-i9-13900k-core-i9-13th-gen/p/N82E16819118412", price: 599 },
                ebay: { url: "https://www.ebay.com/itm/304818128123", price: 579 },
                manufacturer: { url: "https://www.intel.com/content/www/us/en/products/sku/230496/intel-core-i913900k-processor-36m-cache-up-to-5-80-ghz/specifications.html", price: 589 }
            },
            priceHistory: [
                { date: '2023-01', price: 650 },
                { date: '2023-02', price: 629 },
                { date: '2023-03', price: 599 },
                { date: '2023-04', price: 589 },
                { date: '2023-05', price: 579 },
                { date: '2023-06', price: 569 }
            ],
            benchmarks: {
                singleCore: 2200,
                multiCore: 24000,
                gaming: 98,
                productivity: 95,
                rendering: 97,
                encoding: 96
            },
            specs: {
                manufacturer: "Intel",
                cores: "24 (8P + 16E)",
                threads: "32",
                base_clock: "3.0 GHz",
                boost_clock: "5.8 GHz",
                cache: "36MB",
                tdp: "125W",
                socket: "LGA 1700",
                architecture: "Raptor Lake",
                lithography: "10nm",
                memory_type: "DDR4, DDR5",
                max_memory: "128GB",
                price: "$589",
                release_date: "Q4 2022",
                warranty: "3 years"
            },
            powerDraw: {
                base: 125,
                turbo: 253,
                overclocked: 300
            },
            dimensions: {
                length: 45,
                width: 45,
                height: 7.5
            }
        },
        {
            id: "cpu2",
            name: "AMD Ryzen 9 7950X",
            image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1374&auto=format&fit=crop",
            category: "CPU",
            brand: "AMD",
            performanceScore: 97,
            powerScore: 82,
            valueScore: 80,
            popularity: 90,
            buyLinks: {
                amazon: { url: "https://www.amazon.com/AMD-Ryzen-7950X-16-Core-Processor/dp/B0BBHHT9Y2", price: 659 },
                newegg: { url: "https://www.newegg.com/amd-ryzen-9-7950x/p/N82E16819113771", price: 669 },
                ebay: { url: "https://www.ebay.com/itm/304818128123", price: 649 },
                manufacturer: { url: "https://www.amd.com/en/products/cpu/amd-ryzen-9-7950x", price: 699 }
            },
            priceHistory: [
                { date: '2023-01', price: 699 },
                { date: '2023-02', price: 699 },
                { date: '2023-03', price: 689 },
                { date: '2023-04', price: 679 },
                { date: '2023-05', price: 669 },
                { date: '2023-06', price: 659 }
            ],
            benchmarks: {
                singleCore: 2100,
                multiCore: 23000,
                gaming: 96,
                productivity: 97,
                rendering: 96,
                encoding: 95
            },
            specs: {
                manufacturer: "AMD",
                cores: "16",
                threads: "32",
                base_clock: "4.5 GHz",
                boost_clock: "5.7 GHz",
                cache: "80MB",
                tdp: "170W",
                socket: "AM5",
                architecture: "Zen 4",
                lithography: "5nm",
                memory_type: "DDR5",
                max_memory: "128GB",
                price: "$699",
                release_date: "Q3 2022",
                warranty: "3 years"
            },
            powerDraw: {
                base: 170,
                turbo: 230,
                overclocked: 280
            },
            dimensions: {
                length: 45,
                width: 45,
                height: 7.5
            }
        },
        {
            id: "cpu3",
            name: "Intel Core i7-13700K",
            image: "https://images.unsplash.com/photo-1592155931584-901ac15763e3?q=80&w=1470&auto=format&fit=crop",
            category: "CPU",
            brand: "Intel",
            performanceScore: 89,
            powerScore: 78,
            valueScore: 85,
            popularity: 88,
            buyLinks: {
                amazon: { url: "https://www.amazon.com/Intel-i7-13700K-Desktop-Processor-P-cores/dp/B0BCF54L9T", price: 419 },
                newegg: { url: "https://www.newegg.com/intel-core-i7-13700k-core-i7-13th-gen/p/N82E16819118413", price: 429 },
                ebay: { url: "https://www.ebay.com/itm/304818128123", price: 409 },
                manufacturer: { url: "https://www.intel.com/content/www/us/en/products/sku/230500/intel-core-i713700k-processor-30m-cache-up-to-5-40-ghz/specifications.html", price: 419 }
            },
            priceHistory: [
                { date: '2023-01', price: 450 },
                { date: '2023-02', price: 439 },
                { date: '2023-03', price: 429 },
                { date: '2023-04', price: 419 },
                { date: '2023-05', price: 409 },
                { date: '2023-06', price: 399 }
            ],
            benchmarks: {
                singleCore: 2000,
                multiCore: 19000,
                gaming: 92,
                productivity: 88,
                rendering: 87,
                encoding: 86
            },
            specs: {
                manufacturer: "Intel",
                cores: "16 (8P + 8E)",
                threads: "24",
                base_clock: "3.4 GHz",
                boost_clock: "5.4 GHz",
                cache: "30MB",
                tdp: "125W",
                socket: "LGA 1700",
                architecture: "Raptor Lake",
                lithography: "10nm",
                memory_type: "DDR4, DDR5",
                max_memory: "128GB",
                price: "$419",
                release_date: "Q4 2022",
                warranty: "3 years"
            },
            powerDraw: {
                base: 125,
                turbo: 190,
                overclocked: 230
            },
            dimensions: {
                length: 45,
                width: 45,
                height: 7.5
            }
        }
    ],
    gpu: [
        {
            id: "gpu1",
            name: "NVIDIA RTX 4090",
            image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?q=80&w=1470&auto=format&fit=crop",
            category: "GPU",
            brand: "NVIDIA",
            performanceScore: 100,
            powerScore: 70,
            valueScore: 65,
            popularity: 92,
            buyLinks: {
                amazon: { url: "https://www.amazon.com/ASUS-GeForce-Graphics-DisplayPort-Axial-tech/dp/B0BGT232DB", price: 1599 },
                newegg: { url: "https://www.newegg.com/asus-geforce-rtx-4090-rog-strix-rtx4090-o24g-gaming/p/N82E16814126607", price: 1599 },
                ebay: { url: "https://www.ebay.com/itm/304818128123", price: 1599 },
                manufacturer: { url: "https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/rtx-4090/", price: 1599 }
            },
            priceHistory: [
                { date: '2023-01', price: 1599 },
                { date: '2023-02', price: 1599 },
                { date: '2023-03', price: 1599 },
                { date: '2023-04', price: 1599 },
                { date: '2023-05', price: 1599 },
                { date: '2023-06', price: 1599 }
            ],
            benchmarks: {
                gaming: 100,
                ray_tracing: 100,
                creative: 98,
                ai: 99,
                vr: 100,
                thermal: 85
            },
            specs: {
                manufacturer: "NVIDIA",
                vram: "24GB GDDR6X",
                cores: "16384",
                boost_clock: "2.52 GHz",
                memory_interface: "384-bit",
                memory_speed: "21 Gbps",
                tdp: "450W",
                pcie_interface: "PCIe 4.0",
                ports: "3x DisplayPort, 1x HDMI",
                length: "304 mm",
                price: "$1599",
                release_date: "Q4 2022",
                warranty: "3 years"
            },
            powerDraw: {
                base: 450,
                overclocked: 550
            },
            dimensions: {
                length: 304,
                width: 137,
                height: 61,
                slots: 3.5
            }
        },
        {
            id: "gpu2",
            name: "AMD RX 7900 XTX",
            image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=2070&auto=format&fit=crop",
            category: "GPU",
            brand: "AMD",
            performanceScore: 92,
            powerScore: 75,
            valueScore: 85,
            popularity: 85,
            buyLinks: {
                amazon: { url: "https://www.amazon.com/XFX-Speedster-MERC310-Graphics-RX-7900XTX/dp/B0BP7QGY1H", price: 959 },
                newegg: { url: "https://www.newegg.com/xfx-radeon-rx-7900-xtx-rx-79xmercb9/p/N82E16814150873", price: 969 },
                ebay: { url: "https://www.ebay.com/itm/304818128123", price: 949 },
                manufacturer: { url: "https://www.amd.com/en/products/graphics/amd-radeon-rx-7900xtx", price: 999 }
            },
            priceHistory: [
                { date: '2023-01', price: 999 },
                { date: '2023-02', price: 999 },
                { date: '2023-03', price: 989 },
                { date: '2023-04', price: 979 },
                { date: '2023-05', price: 969 },
                { date: '2023-06', price: 959 }
            ],
            benchmarks: {
                gaming: 92,
                ray_tracing: 85,
                creative: 90,
                ai: 80,
                vr: 90,
                thermal: 88
            },
            specs: {
                manufacturer: "AMD",
                vram: "24GB GDDR6",
                cores: "6144",
                boost_clock: "2.5 GHz",
                memory_interface: "384-bit",
                memory_speed: "20 Gbps",
                tdp: "355W",
                pcie_interface: "PCIe 4.0",
                ports: "2x DisplayPort, 1x HDMI, 1x USB-C",
                length: "287 mm",
                price: "$999",
                release_date: "Q4 2022",
                warranty: "2 years"
            },
            powerDraw: {
                base: 355,
                overclocked: 420
            },
            dimensions: {
                length: 287,
                width: 135,
                height: 58,
                slots: 2.7
            }
        },
        {
            id: "gpu3",
            name: "NVIDIA RTX 4080",
            image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?q=80&w=1470&auto=format&fit=crop",
            category: "GPU",
            brand: "NVIDIA",
            performanceScore: 88,
            powerScore: 78,
            valueScore: 70,
            popularity: 80,
            buyLinks: {
                amazon: { url: "https://www.amazon.com/MSI-RTX-4080-16G-GAMING/dp/B0BN5FSB7G", price: 1199 },
                newegg: { url: "https://www.newegg.com/msi-geforce-rtx-4080-rtx-4080-16gb-ventus-3x-oc/p/N82E16814137761", price: 1199 },
                ebay: { url: "https://www.ebay.com/itm/304818128123", price: 1199 },
                manufacturer: { url: "https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/rtx-4080/", price: 1199 }
            },
            priceHistory: [
                { date: '2023-01', price: 1199 },
                { date: '2023-02', price: 1199 },
                { date: '2023-03', price: 1199 },
                { date: '2023-04', price: 1199 },
                { date: '2023-05', price: 1199 },
                { date: '2023-06', price: 1199 }
            ],
            benchmarks: {
                gaming: 88,
                ray_tracing: 90,
                creative: 85,
                ai: 90,
                vr: 88,
                thermal: 82
            },
            specs: {
                manufacturer: "NVIDIA",
                vram: "16GB GDDR6X",
                cores: "9728",
                boost_clock: "2.51 GHz",
                memory_interface: "256-bit",
                memory_speed: "22.4 Gbps",
                tdp: "320W",
                pcie_interface: "PCIe 4.0",
                ports: "3x DisplayPort, 1x HDMI",
                length: "294 mm",
                price: "$1199",
                release_date: "Q4 2022",
                warranty: "3 years"
            },
            powerDraw: {
                base: 320,
                overclocked: 380
            },
            dimensions: {
                length: 294,
                width: 136,
                height: 62,
                slots: 3
            }
        }
    ],
    ram: [
        {
            id: "ram1",
            name: "Corsair Dominator Platinum RGB 32GB",
            image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=2070&auto=format&fit=crop",
            category: "RAM",
            brand: "Corsair",
            performanceScore: 85,
            powerScore: 90,
            valueScore: 75,
            popularity: 82,
            buyLinks: {
                amazon: { url: "https://www.amazon.com/CORSAIR-DOMINATOR-PLATINUM-PC5-48000-288-Pin/dp/B09PNG3J6Z", price: 199 },
                newegg: { url: "https://www.newegg.com/corsair-32gb-288-pin-ddr5-sdram/p/N82E16820236833", price: 209 },
                ebay: { url: "https://www.ebay.com/itm/304818128123", price: 189 },
                manufacturer: { url: "https://www.corsair.com/us/en/Categories/Products/Memory/DOMINATOR-PLATINUM-RGB-DDR5-Memory/p/CMT32GX5M2X6000C36", price: 249 }
            },
            priceHistory: [
                { date: '2023-01', price: 249 },
                { date: '2023-02', price: 239 },
                { date: '2023-03', price: 229 },
                { date: '2023-04', price: 219 },
                { date: '2023-05', price: 209 },
                { date: '2023-06', price: 199 }
            ],
            benchmarks: {
                speed: 6000,
                latency: 36,
                bandwidth: 48000,
                stability: 95,
                overclocking: 80
            },
            specs: {
                manufacturer: "Corsair",
                capacity: "32GB (2x16GB)",
                speed: "DDR5-6000",
                latency: "CL36",
                voltage: "1.25V",
                form_factor: "DIMM",
                modules: "2",
                rgb: "Yes",
                price: "$249",
                release_date: "Q2 2022",
                warranty: "Lifetime"
            },
            powerDraw: {
                base: 5,
                overclocked: 8
            },
            dimensions: {
                length: 133,
                width: 8,
                height: 45
            }
        },
        {
            id: "ram2",
            name: "G.Skill Trident Z5 RGB 64GB",
            image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=2070&auto=format&fit=crop",
            category: "RAM",
            brand: "G.Skill",
            performanceScore: 87,
            powerScore: 88,
            valueScore: 80,
            popularity: 78,
            buyLinks: {
                amazon: { url: "https://www.amazon.com/G-Skill-Trident-288-Pin-CL36-36-36-96-F5-5600U3636C32GX2-TZ5RK/dp/B09QHXWQ1K", price: 279 },
                newegg: { url: "https://www.newegg.com/g-skill-64gb-288-pin-ddr5-sdram/p/N82E16820374369", price: 289 },
                ebay: { url: "https://www.ebay.com/itm/304818128123", price: 269 },
                manufacturer: { url: "https://www.gskill.com/product/165/326/1562839194/Trident-Z5-RGB-DDR5-5600MHz-CL36-36-36-89-1.25V-64GB-(2x32GB)", price: 329 }
            },
            priceHistory: [
                { date: '2023-01', price: 329 },
                { date: '2023-02', price: 319 },
                { date: '2023-03', price: 309 },
                { date: '2023-04', price: 299 },
                { date: '2023-05', price: 289 },
                { date: '2023-06', price: 279 }
            ],
            benchmarks: {
                speed: 5600,
                latency: 36,
                bandwidth: 44800,
                stability: 93,
                overclocking: 82
            },
            specs: {
                manufacturer: "G.Skill",
                capacity: "64GB (2x32GB)",
                speed: "DDR5-5600",
                latency: "CL36",
                voltage: "1.25V",
                form_factor: "DIMM",
                modules: "2",
                rgb: "Yes",
                price: "$329",
                release_date: "Q1 2022",
                warranty: "Lifetime"
            },
            powerDraw: {
                base: 6,
                overclocked: 10
            },
            dimensions: {
                length: 133,
                width: 8,
                height: 45
            }
        }
    ],
    storage: [
        {
            id: "storage1",
            name: "Samsung 990 Pro 2TB",
            image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=2070&auto=format&fit=crop",
            category: "Storage",
            brand: "Samsung",
            performanceScore: 95,
            powerScore: 85,
            valueScore: 80,
            popularity: 90,
            buyLinks: {
                amazon: { url: "https://www.amazon.com/SAMSUNG-990-PRO-Internal-Gaming/dp/B0BHC395WW", price: 129 },
                newegg: { url: "https://www.newegg.com/samsung-2tb-990-pro/p/N82E16820147793", price: 139 },
                ebay: { url: "https://www.ebay.com/itm/304818128123", price: 119 },
                manufacturer: { url: "https://www.samsung.com/us/computing/memory-storage/solid-state-drives/990-pro-pcie-4-0-nvme-ssd-2tb-mz-v9p2t0b-am/", price: 179 }
            },
            priceHistory: [
                { date: '2023-01', price: 179 },
                { date: '2023-02', price: 169 },
                { date: '2023-03', price: 159 },
                { date: '2023-04', price: 149 },
                { date: '2023-05', price: 139 },
                { date: '2023-06', price: 129 }
            ],
            benchmarks: {
                read: 7450,
                write: 6900,
                iops: 1400000,
                endurance: 1200,
                thermal: 85
            },
            specs: {
                manufacturer: "Samsung",
                capacity: "2TB",
                type: "NVMe PCIe 4.0",
                form_factor: "M.2 2280",
                read_speed: "7450 MB/s",
                write_speed: "6900 MB/s",
                endurance: "1200 TBW",
                controller: "Samsung Pascal",
                nand_type: "3D TLC",
                dram_cache: "Yes",
                encryption: "AES 256-bit",
                price: "$179",
                release_date: "Q4 2022",
                warranty: "5 years"
            },
            powerDraw: {
                idle: 0.05,
                active: 5.5,
                peak: 8.5
            },
            dimensions: {
                length: 80,
                width: 22,
                height: 2.4
            }
        },
        {
            id: "storage2",
            name: "WD Black SN850X 1TB",
            image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=2070&auto=format&fit=crop",
            category: "Storage",
            brand: "Western Digital",
            performanceScore: 92,
            powerScore: 88,
            valueScore: 85,
            popularity: 85,
            buyLinks: {
                amazon: { url: "https://www.amazon.com/WD_BLACK-SN850X-Internal-Gaming-Solid/dp/B0B7CKVCCV", price: 75 },
                newegg: { url: "https://www.newegg.com/western-digital-1tb-black-sn850x-nvme/p/N82E16820250235", price: 79 },
                ebay: { url: "https://www.ebay.com/itm/304818128123", price: 69 },
                manufacturer: { url: "https://shop.westerndigital.com/products/internal-drives/wd-black-sn850x-nvme-ssd#WDS100T2X0E", price: 99 }
            },
            priceHistory: [
                { date: '2023-01', price: 99 },
                { date: '2023-02', price: 95 },
                { date: '2023-03', price: 89 },
                { date: '2023-04', price: 85 },
                { date: '2023-05', price: 79 },
                { date: '2023-06', price: 75 }
            ],
            benchmarks: {
                read: 7300,
                write: 6300,
                iops: 1200000,
                endurance: 600,
                thermal: 88
            },
            specs: {
                manufacturer: "Western Digital",
                capacity: "1TB",
                type: "NVMe PCIe 4.0",
                form_factor: "M.2 2280",
                read_speed: "7300 MB/s",
                write_speed: "6300 MB/s",
                endurance: "600 TBW",
                controller: "WD Black G2",
                nand_type: "3D TLC",
                dram_cache: "Yes",
                encryption: "AES 256-bit",
                price: "$99",
                release_date: "Q3 2022",
                warranty: "5 years"
            },
            powerDraw: {
                idle: 0.05,
                active: 5.0,
                peak: 7.8
            },
            dimensions: {
                length: 80,
                width: 22,
                height: 2.4
            }
        }
    ],
    motherboard: [
        {
            id: "mb1",
            name: "ASUS ROG Maximus Z790 Hero",
            image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=2070&auto=format&fit=crop",
            category: "Motherboard",
            brand: "ASUS",
            performanceScore: 90,
            powerScore: 85,
            valueScore: 70,
            popularity: 88,
            buyLinks: {
                amazon: { url: "https://www.amazon.com/ASUS-Maximus-Motherboard-Thunderbolt-DisplayPort/dp/B0BDF6BZ2J", price: 549 },
                newegg: { url: "https://www.newegg.com/asus-rog-maximus-z790-hero/p/N82E16813119667", price: 559 },
                ebay: { url: "https://www.ebay.com/itm/304818128123", price: 539 },
                manufacturer: { url: "https://rog.asus.com/us/motherboards/rog-maximus/rog-maximus-z790-hero-model/", price: 599 }
            },
            priceHistory: [
                { date: '2023-01', price: 599 },
                { date: '2023-02', price: 589 },
                { date: '2023-03', price: 579 },
                { date: '2023-04', price: 569 },
                { date: '2023-05', price: 559 },
                { date: '2023-06', price: 549 }
            ],
            specs: {
                manufacturer: "ASUS",
                socket: "LGA 1700",
                chipset: "Intel Z790",
                form_factor: "ATX",
                memory_slots: "4",
                max_memory: "128GB",
                memory_type: "DDR5",
                pcie_slots: "3x PCIe 5.0 x16",
                m2_slots: "4",
                sata_ports: "6",
                usb_ports: "12x USB 3.2, 2x USB-C",
                wifi: "Wi-Fi 6E",
                bluetooth: "5.2",
                audio: "ROG SupremeFX 7.1",
                rgb: "Yes",
                price: "$599",
                release_date: "Q4 2022",
                warranty: "3 years"
            },
            powerDraw: {
                idle: 15,
                load: 30
            },
            dimensions: {
                length: 305,
                width: 244,
                height: 50
            }
        }
    ],
    psu: [
        {
            id: "psu1",
            name: "Corsair RM1000x",
            image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=2070&auto=format&fit=crop",
            category: "PSU",
            brand: "Corsair",
            performanceScore: 92,
            powerScore: 95,
            valueScore: 85,
            popularity: 90,
            buyLinks: {
                amazon: { url: "https://www.amazon.com/CORSAIR-RM1000x-Fully-Modular-Supply/dp/B08R5PH1VX", price: 149 },
                newegg: { url: "https://www.newegg.com/corsair-rm1000x-cp-9020201-na-1000w/p/N82E16817139235", price: 159 },
                ebay: { url: "https://www.ebay.com/itm/304818128123", price: 139 },
                manufacturer: { url: "https://www.corsair.com/us/en/Categories/Products/Power-Supply-Units/rmx-series-config/p/CP-9020201-NA", price: 199 }
            },
            priceHistory: [
                { date: '2023-01', price: 199 },
                { date: '2023-02', price: 189 },
                { date: '2023-03', price: 179 },
                { date: '2023-04', price: 169 },
                { date: '2023-05', price: 159 },
                { date: '2023-06', price: 149 }
            ],
            specs: {
                manufacturer: "Corsair",
                wattage: "1000W",
                efficiency: "80+ Gold",
                form_factor: "ATX",
                modular: "Fully",
                pcie_connectors: "4",
                sata_connectors: "12",
                price: "$199",
                release_date: "Q4 2020",
                warranty: "10 years"
            },
            dimensions: {
                length: 160,
                width: 150,
                height: 86
            }
        }
    ],
    case: [
        {
            id: "case1",
            name: "Lian Li PC-O11 Dynamic",
            image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=2070&auto=format&fit=crop",
            category: "Case",
            brand: "Lian Li",
            performanceScore: 88,
            powerScore: 90,
            valueScore: 80,
            popularity: 85,
            buyLinks: {
                amazon: { url: "https://www.amazon.com/Lian-Li-PC-O11-Dynamic-Mid-Tower/dp/B07D5V929G", price: 109 },
                newegg: { url: "https://www.newegg.com/p/2AM-000Z-00058", price: 119 },
                ebay: { url: "https://www.ebay.com/itm/304818128123", price: 99 },
                manufacturer: { url: "https://lian-li.com/product/pc-o11dynamic/", price: 149 }
            },
            priceHistory: [
                { date: '2023-01', price: 149 },
                { date: '2023-02', price: 139 },
                { date: '2023-03', price: 129 },
                { date: '2023-04', price: 129 },
                { date: '2023-05', price: 119 },
                { date: '2023-06', price: 109 }
            ],
            specs: {
                manufacturer: "Lian Li",
                type: "Mid Tower",
                color: "Black",
                material: "Steel/Tempered Glass",
                motherboard_support: "ATX, Micro-ATX, Mini-ITX",
                max_gpu_length: "420mm",
                max_cpu_cooler_height: "155mm",
                expansion_slots: "8",
                drive_bays: "6",
                price: "$149",
                release_date: "Q2 2018",
                warranty: "1 year"
            },
            dimensions: {
                length: 445,
                width: 272,
                height: 446
            }
        }
    ],
    cooling: [
        {
            id: "cooling1",
            name: "Noctua NH-D15",
            image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=2070&auto=format&fit=crop",
            category: "Cooling",
            brand: "Noctua",
            performanceScore: 90,
            powerScore: 95,
            valueScore: 85,
            popularity: 88,
            buyLinks: {
                amazon: { url: "https://www.amazon.com/Noctua-NH-D15-heatpipe-NF-A15-140mm/dp/B00L7UZMAK", price: 99 },
                newegg: { url: "https://www.newegg.com/noctua-nh-d15/p/N82E16835608045", price: 109 },
                ebay: { url: "https://www.ebay.com/itm/304818128123", price: 89 },
                manufacturer: { url: "https://noctua.at/en/nh-d15", price: 99 }
            },
            priceHistory: [
                { date: '2023-01', price: 99 },
                { date: '2023-02', price: 99 },
                { date: '2023-03', price: 99 },
                { date: '2023-04', price: 99 },
                { date: '2023-05', price: 99 },
                { date: '2023-06', price: 99 }
            ],
            specs: {
                manufacturer: "Noctua",
                type: "Air",
                socket: "All modern sockets",
                fans: "2x NF-A15 140mm",
                noise_level: "24.6 dB(A)",
                max_tdp: "220W",
                height: "165mm",
                price: "$99",
                release_date: "Q2 2014",
                warranty: "6 years"
            },
            dimensions: {
                length: 160,
                width: 150,
                height: 165
            }
        },
        {
            id: "cooling2",
            name: "Corsair iCUE H150i ELITE CAPELLIX",
            image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=2070&auto=format&fit=crop",
            category: "Cooling",
            brand: "Corsair",
            performanceScore: 92,
            powerScore: 85,
            valueScore: 80,
            popularity: 85,
            buyLinks: {
                amazon: { url: "https://www.amazon.com/CORSAIR-iCUE-ELITE-CAPELLIX-Liquid/dp/B08KJN3K9P", price: 169 },
                newegg: { url: "https://www.newegg.com/corsair-liquid-cooling-system/p/N82E16835181193", price: 179 },
                ebay: { url: "https://www.ebay.com/itm/304818128123", price: 159 },
                manufacturer: { url: "https://www.corsair.com/us/en/Categories/Products/Liquid-Cooling/iCUE-ELITE-CAPELLIX-Liquid-CPU-Cooler/p/CW-9060048-WW", price: 199 }
            },
            priceHistory: [
                { date: '2023-01', price: 199 },
                { date: '2023-02', price: 189 },
                { date: '2023-03', price: 179 },
                { date: '2023-04', price: 169 },
                { date: '2023-05', price: 169 },
                { date: '2023-06', price: 169 }
            ],
            specs: {
                manufacturer: "Corsair",
                type: "Liquid",
                socket: "All modern sockets",
                radiator_size: "360mm",
                fans: "3x ML120 RGB",
                noise_level: "10-37 dB(A)",
                max_tdp: "250W+",
                rgb: "Yes",
                price: "$199",
                release_date: "Q4 2020",
                warranty: "5 years"
            },
            dimensions: {
                radiator_length: 397,
                radiator_width: 120,
                radiator_height: 27,
                fan_size: 120
            }
        }
    ]
};

// Function to update prices from external sources (would be implemented with actual API calls)
async function updatePricesFromSources() {
    // This would make API calls to Amazon, Newegg, eBay, etc.
    // For now, we'll just return the existing data
    return partsDatabase;
}

// Initialize with updated prices
updatePricesFromSources().then(updatedDatabase => {
    // In a real implementation, we would use the updated database
    console.log("Prices updated from external sources");
});
