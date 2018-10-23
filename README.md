# ImportingMdInAngular6

- Changed to angular builders to be able to add extra steps with webpack.

- Use `markdown-loader` and `html-loader` in that extra step. 

- Added this snippet to be able to import an md file as a module
```typescript 
declare module '*.md' {
  const value: any;
  export default value;
}
```

- Imported your md like `import md from '../../CHANGELOG.md'`

- Added to `tsconfig.ts` our new ambient module definition and all ts as well.
```typescript
{
  ...
  "include": [
    "./src/**/*.ts",
    "./markdown.d.ts"
  ]
}
```

- Done, thx to @meltedspark
