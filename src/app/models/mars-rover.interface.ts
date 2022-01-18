interface MarsRoverPhotosCamera {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
}

interface MarsRoverDataRover {
    id: number;
    name: string;
    landing_data: string;
    launch_date: string;
    status: string;
}

export interface MarsRoverPhotosData {
    camera: MarsRoverPhotosCamera;
    earth_date: string;
    id: number;
    img_src: string;
    rover: MarsRoverDataRover;
    sol: number;
}

export interface MarsRoverData {
    photos: Array<MarsRoverPhotosData>;
}