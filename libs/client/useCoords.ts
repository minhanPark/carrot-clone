import { useEffect, useState } from "react";

interface UseCoordState {
  longitude: number | null;
  latitude: number | null;
}

export default function useCoords() {
  const [coords, setCoords] = useState<UseCoordState>({
    longitude: null,
    latitude: null,
  });
  const onSuccess = ({
    coords: { longitude, latitude },
  }: GeolocationPosition) => {
    setCoords({ longitude, latitude });
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSuccess);
  }, []);
  return coords;
}
