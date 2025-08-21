import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

/**
 * Typed useDispatch hook for Redux
 * Provides type safety for dispatch actions
 * Use this instead of the plain useDispatch from react-redux
 */
export const useAppDispatch: () => AppDispatch = useDispatch;

/**
 * Typed useSelector hook for Redux
 * Provides type safety for state selection
 * Use this instead of the plain useSelector from react-redux
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
