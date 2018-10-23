# ImportingMdInAngular6

**not solved** 

Changed to angular builders to be able to add extra steps with webpack.

Added this snippet to get rid of an editor error
```typescript 
declare module '*.md' {
  const value: any;
  export default value;
}
```

but unfortunately we get
> ERROR in src/app/changelog.component.ts(3,16): error TS2307: Cannot find module '../../CHANGELOG.md'.

However, with `ng s` when it try to recompile because of a change, it can make it although you can see the error. If you try to do `ng b` the error prevent the build to be done. 
