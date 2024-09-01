import useSWR from "swr";
import { fetcher } from "./api";
import { Ride } from "../types/ride";

export function useRideById(id: string) {
  const { data, error, isLoading } = useSWR<Ride>(
    `http://localhost:5000/api/rides/${id}`,
    fetcher
  );

  return {
    ride: data,
    isLoading,
    isError: error,
  };
}
