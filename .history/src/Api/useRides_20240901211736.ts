import useSWR from "swr";
import { fetcher } from "./api";
import { Ride } from "../types/ride";

export function useRides() {
  const { data, error, isLoading } = useSWR<Ride[]>(
    `http://localhost:5000/api/rides`,
    fetcher
  );

  return {
    rides: data,
    isLoading,
    isError: error,
  };
}
