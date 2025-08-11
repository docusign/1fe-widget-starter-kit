# 1fe Widget Starter Kit

A template for building widgets within the 1fe ecosystem. This starter kit provides the foundation, examples, and best practices for developing production-ready widgets.

It powers the starter-kit plugin on demo.1fe.com(<https://demo.1fe.com/widget-starter-kit>)

## What's in this repository

This starter kit provides:

- **Widget development setup** with TypeScript, React, and 1fe CLI integration
- **Example components** demonstrating common widget patterns and platform utilities
- **Testing framework** with Jest for unit tests and Playwright for E2E tests
- **Development tools** including ESLint, Prettier, and hot reloading
- **State management** using Redux Toolkit
- **UI components** with Material-UI and Antd examples

## Prerequisites

- **Node.js** `>= 22`
- **Yarn** (package manager)

## Getting Started

### Development Setup

Your organization may have a template which is based off of this repository. IF so, use that for building your widgets and plugins instead.

Following steps will get you started hosting this plugin

```bash
# Clone this repository
git clone <repository-url>
cd 1fe-widget-starter-kit

# Install dependencies
yarn install

# Start development server
yarn dev
```

### Project Structure

```text
src/
├── components/
│   ├── appLoadTime/           # Performance monitoring examples
│   ├── context/               # React context examples
│   ├── customLogger/          # Logging utilities
│   ├── eventBus/              # Event communication examples
│   ├── experience/            # User experience components
│   ├── localAndSessionStorage/ # Storage utilities
│   ├── misc/                  # Miscellaneous utilities
│   ├── platformPropsImport/   # Platform integration examples
│   ├── routes/                # Routing examples
│   └── widgets/               # Widget composition examples
├── store/                     # Redux store configuration
├── types/                     # TypeScript type definitions
├── assets/                    # Static assets
├── app1.tsx                   # Main application component
├── contract.ts                # Widget contract definition
├── root.component.tsx         # Root component
└── widget.ts                  # Widget entry point
```

## Development Commands

```bash
# Start development server with hot reloading
yarn dev

# Build widget for production
yarn build:widget

# Run unit tests
yarn test
# Lint code
yarn lint

# Format code
yarn format

# Check code formatting
yarn check-format
```

## Widget Configuration

### 1fe Configuration

The `.1fe.config.ts` file defines widget configuration:

```typescript
import { OneFeConfiguration } from "@1fe/cli";
import { getBaseConfig } from "@1fe/sample-widget-base-config";

const configuration: OneFeConfiguration = {
  baseConfig: getBaseConfig,
};
```

### Widget Contract

Define your widget's interface in `src/contract.ts`:

```typescript
export interface MyWidgetContract {
  // Define your widget's props and methods
}
```

## Example Components

The starter kit includes examples for:

- **App Load Time**: Performance monitoring and metrics
- **Context**: React context for state sharing
- **Custom Logger**: Logging integration with platform
- **Event Bus**: Inter-widget communication
- **Local/Session Storage**: Data persistence utilities
- **Platform Props**: Accessing 1fe platform utilities
- **Router**: Navigation and routing patterns
- **Widgets**: Composing multiple widget components

## Testing

### Unit Testing

- Uses Jest with React Testing Library
- Test files: `*.test.tsx` or `*.spec.tsx`
- Run with: `yarn test`

### E2E Testing

- Uses Playwright for browser testing
- Test files in `tests/` directory

## Building for Production

```bash
# Build optimized widget bundle
yarn build:widget

# The built files will be in the dist/ directory
```

## Contributing

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Run tests (`yarn test`)
5. Ensure linting passes (`yarn lint`)
6. Format your code (`yarn format`)
7. Commit your changes (`git commit -m 'Add feature'`)
8. Push to your branch (`git push origin feature/your-feature`)
9. Open a Pull Request

### Code Quality

- Follow TypeScript best practices
- Maintain test coverage
- Use provided ESLint and Prettier configurations
- Document any new components or utilities

## Troubleshooting

### Common Issues

- **Build failures**: Ensure Node.js version is >= 22 and dependencies are installed
- **TypeScript errors**: Check type definitions in `src/types/`
- **Test failures**: Verify mock configurations and test setup

## Getting Help

- **[1fe Documentation](https://1fe.com/getting-started/installation/)** - Complete platform documentation
- **[GitHub Issues](https://github.com/docusign/1fe/issues)** - Report bugs or request features
- **[GitHub Discussions](https://github.com/docusign/1fe/discussions)** - Ask questions and share ideas

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
