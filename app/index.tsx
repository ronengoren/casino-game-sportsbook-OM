import { useEffect, useLayoutEffect } from "react";

import { Link, router } from "expo-router";

export default function Index() {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      router.navigate("/home");
    }, 0);

    return () => clearTimeout(timeoutId);
  }, []);
}
