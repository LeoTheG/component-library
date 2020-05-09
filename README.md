# Adventure Component Library

Reusable components for applications

## View Library

`npm run start:library`

## Watch for local development

`npm run start`

## Notes

For local development, you must link your apps using `npm link`.
In the app that uses the component library, link for local npm development by first running `npm link` in `adventure-component-library`'s root directory, then connect it to a local app by running `npm link /path/to/adventure-component-library`