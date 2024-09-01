import useSWR from "swr";
import { fetcher } from "./api";
import { Ride } from "../types/ride";

export function useRides() {
  const { data, error, isLoading } = useSWR<Ride>(
    `http://localhost:5000/api/rides`,
    fetcher
  );

  return {
    user: data,
    isLoading,
    isError: error,
  };
}
