import useSwr, { KeyedMutator } from "swr";

import fetcher from "@/lib/fetcher";
import { User } from "@/shared/types/user";
import { NextError } from "@/shared/types/common";

interface UseCurrentUser {
  data: User;
  error: NextError;
  isLoading: boolean;
  mutate: KeyedMutator<User>;
}

const useCurrentUser = (): UseCurrentUser => {
  const { data, error, isLoading, mutate } = useSwr("/api/current", fetcher);
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useCurrentUser;
