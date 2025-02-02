"use client";
import { makeStore } from "@/lib/store";
import React from "react";
import { Provider } from "react-redux";
export default function RootProviders({
	children,
}: {
	children: React.ReactNode;
}) {
	return <Provider store={makeStore()}>{children}</Provider>;
}
