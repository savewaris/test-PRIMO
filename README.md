# 3-Array Merge Project (TypeScript)

This repository contains a high-performance TypeScript implementation built exactly to satisfy the requirements of the coding challenge outlined below.

---

## 📋 Assignment Requirements

> **Instruction:**
> Please write a TypeScript project with unit test:
> 
> For implementing a function with this interface:
> `merge (int[] collection_1, int[] collection_2, int[] collection_3) : int []`
> That returns a sorted array by ascending.
> 
> **Given:**
> - `collection_1`, `collection_3` already sorted from min(0) to max (Ascending).
> - `collection_2` already sorted from max to min(0) (Descending).
> 
> **Deliverables:**
> - Provide an accessible repository of a TypeScript project with unit tests.
> - Provide instructions on how to set up dependencies, execute code, and run unit tests.
> 
> *Note: Don't allow using any sort functions.*

---

## 📋 Table of Contents
1. [Assignment Requirements](#-assignment-requirements)
2. [Code Implementation Details](#-code-implementation-details)
3. [Algorithm & Complexity](#-algorithm--complexity)
4. [Project Directory Structure](#-project-directory-structure)
5. [Prerequisites](#-prerequisites)
6. [Getting Started (Setup)](#-getting-started-setup)
7. [Available Scripts](#-available-scripts)
    - [Install Dependencies](#1-install-dependencies)
    - [Run Unit Tests](#2-run-unit-tests)
    - [Build / Compile TypeScript](#3-build--compile-typescript)
8. [Unit Testing](#-unit-testing)

---

## 💡 Code Implementation Details

The implementation resides in [src/merge.ts](file:///d:/save/coding/interviewTest/PRIMO/test/src/merge.ts) and exposes the target interface mapping:

```typescript
export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[]
```

### Constraints Met:
1. **No Built-in Sorting**: Standard sorting APIs (such as `Array.prototype.sort()`) are **never** used. Instead, we use a single-pass comparison to achieve true $O(N)$ time complexity.
2. **TypeScript Support**: The project is written fully in TypeScript with structural type configurations.
3. **Array Directions**: The algorithm correctly leverages the ascending order of `collection_1` and `collection_3` (iterating forwards) and the descending order of `collection_2` (iterating backwards from the end).

---

## ⚙️ Algorithm & Complexity

### Algorithm details
Instead of combining the arrays and calling a sort function (which would run in $O(N \log N)$ time), this solution implements a **Three-Pointer approach**:
- **Pointer 1 (`p1`)**: Starts at index `0` of `collection_1` (ascending) and moves forwards.
- **Pointer 2 (`p2`)**: Starts at the **last index** of `collection_2` (descending) and moves **backwards**. Since `collection_2` is sorted in descending order, reading it backwards from the end gives values in ascending order!
- **Pointer 3 (`p3`)**: Starts at index `0` of `collection_3` (ascending) and moves forwards.

In a single pass (`while` loop), we compare the elements at the three pointers, select the smallest value, push it to the output array, and increment/decrement the corresponding pointer. If any array is fully traversed, its pointer value is treated as `Infinity`.

### Complexity Analysis
- **Time Complexity:** $O(N_1 + N_2 + N_3)$ where $N_i$ is the length of `collection_i`. Every element is visited exactly once.
- **Space Complexity:** $O(1)$ auxiliary space (excluding the output array).

---

## 📂 Project Directory Structure

```text
├── src/
│   └── merge.ts           # Core implementation of the merge function
├── tests/
│   └── merge.test.ts      # Comprehensive Jest unit test cases
├── .gitignore             # Git ignore configuration
├── jest.config.js         # Jest testing configuration
├── package.json           # Project manifest and scripts
├── tsconfig.json          # TypeScript compiler configuration
└── README.md              # Documentation (This file)
```

---

## 🛠️ Prerequisites

Before you start, make sure you have the following installed:
- **Node.js**: `v18.x` or higher (Recommended)
- **npm**: `v9.x` or higher (usually packaged with Node.js)

---

## 🚀 Getting Started (Setup)

Follow these simple steps to set up the project locally:

### 1. Clone or Extract the Repository
Ensure the project files are located in your working directory.

### 2. Install Dependencies
Run the following command in the project root directory to install development dependencies (TypeScript, Jest, ts-jest, etc.):

```bash
npm install
```

---

## ⚡ Available Scripts

Below are the primary commands configured in `package.json`:

### 1. Run Unit Tests
To execute all test suites using Jest:
```bash
npm test
```

### 2. Build / Compile TypeScript
To compile the TypeScript files under `src/` into JavaScript inside a `dist/` folder:
```bash
npm run build
```

---

## 🧪 Unit Testing

The testing suite inside [tests/merge.test.ts](file:///d:/save/coding/interviewTest/PRIMO/test/tests/merge.test.ts) evaluates several strict scenarios and edge cases to verify that the implementation is exceptionally robust:
- **Standard Balanced Inputs:** Validates merging arrays with regular positive integers.
- **Varying Lengths:** Tests arrays with highly uneven lengths (e.g., small arrays combined with much larger ones).
- **Negative & Zero Values:** Ensures correct ordering of negative numbers, zero, and positive numbers.
- **Duplicate Elements:** Verifies that duplicates are preserved and correctly ordered.
- **Empty & Partial Inputs:** Tests edge scenarios like all-empty arrays or mixing empty arrays with populated ones.
