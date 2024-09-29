/**
 * General utility functions
 * @module utils
 * @description This module holds all the utility functions used across the application's backend.
 */

// Simple sleep function
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export { sleep };
