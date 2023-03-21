class Tv {
    brand: string;
    size: number;
    resolution: string;
    connections: string[];
    connectedTo?: string;
    constructor(brand: string, size: number, resolution: string, connections: string[]) {
        console.log(`Creating Tv ${brand}`);
        this.brand = brand;
        this.size = size;
        this.resolution = resolution;
        this.connections = connections;
    }

    turnOn() {
        console.log(`TV ${this.brand}, ${this.size}", resolution: ${this.resolution} \n\
        available connections: ${this.connections}`);
    }
}

const samsung = new Tv('Samsung', 15, '1900x1600', ['Usb', 'Sata']);
samsung.turnOn();