/* eslint-disable @typescript-eslint/no-unused-vars */
import { QueryClient } from "@tanstack/react-query";

const Client: QueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default Client;
