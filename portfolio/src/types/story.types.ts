// src/types/story.types.ts

export type StoryBlock =
  | { kind: 'hero';   imageIndex: number }
  | { kind: 'full';   imageIndex: number }
  | { kind: 'single'; imageIndex: number }
  | { kind: 'wide';   imageIndex: number }
  | { kind: 'pair';   imageIndices: [number, number] }
  | { kind: 'trio';   imageIndices: [number, number, number] }
  | { kind: 'text';   variant: 'paragraph' | 'short'; content: string }
  | { kind: 'quote';  content: string };
