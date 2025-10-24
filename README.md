# TypeScript Todo App

A modern, responsive Todo application built with React, TypeScript, and Styled Components. This project demonstrates component decomposition, custom hooks, and TypeScript best practices.

## 🚀 Features

- **Add Tasks**: Create new todos with a simple input field
- **Mark Complete**: Check off completed tasks
- **Filter Tasks**: View All, Active, or Completed tasks
- **Clear Completed**: Remove all completed tasks at once
- **Dark/Light Mode**: Toggle between dark and light themes
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Styled Components** - CSS-in-JS styling
- **React Hooks** - Custom hooks for state management
- **Component Architecture** - Modular, reusable components

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Header.tsx       # App header with theme toggle
│   ├── TodoInput.tsx    # Task input and check-all button
│   ├── TaskList.tsx     # List of tasks with filtering
│   ├── Task.tsx         # Individual task component
│   ├── TaskStats.tsx    # Task statistics and clear button
│   ├── Filter.tsx       # Filter buttons (All, Active, Completed)
│   └── Main.tsx         # Main container component
├── hooks/               # Custom React hooks
│   └── useTodo.ts      # Todo state management logic
├── types/               # TypeScript type definitions
│   ├── index.ts        # Main type definitions
│   └── images.d.ts     # Image file type declarations
├── styled-components/   # Styled components
│   ├── Body.styled.ts  # Body styling
│   ├── MainWrapper.styled.ts # Main wrapper styling
│   ├── TaskWrapper.styled.ts # Task styling
│   └── index.ts        # Styled components exports
├── assets/              # Static assets
│   ├── images/         # Images and icons
│   └── index.ts        # Asset exports
└── App.tsx             # Root application component
```

## 🏗️ Architecture

This project demonstrates several important React and TypeScript concepts:

### Component Decomposition

- Large components broken down into smaller, focused components
- Each component has a single responsibility
- Improved maintainability and reusability

### Custom Hooks

- `useTodo` hook manages all todo-related state and logic
- Separates business logic from UI components
- Makes state management reusable and testable

### TypeScript Integration

- Strict type checking throughout the application
- Custom type definitions for better code safety
- Proper typing for React props and state

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd TypeScript-ToDo-App
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## 📝 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App

## 🎨 Styling

The application uses Styled Components for styling, providing:

- Component-scoped styles
- Dynamic theming (dark/light mode)
- Responsive design
- Clean, modern UI

## 🔧 Key Features Explained

### Component Architecture

- **Header**: Manages the app title and theme toggle
- **TodoInput**: Handles new task creation and check-all functionality
- **TaskList**: Displays filtered tasks and manages task rendering
- **Task**: Individual task component with complete/delete functionality
- **TaskStats**: Shows task count and clear completed button
- **Filter**: Provides filtering options for task views

### State Management

- Custom `useTodo` hook centralizes all todo-related state
- Efficient filtering with useMemo for performance
- Proper TypeScript typing for all state operations

### Theme Support

- Dynamic dark/light mode switching
- Theme state managed at the app level
- Consistent theming across all components

## 🧪 Testing

The project includes basic testing setup with Create React App's testing framework. Run tests with:

```bash
npm test
```

## 📱 Responsive Design

The application is fully responsive and works on:

- Desktop computers
- Tablets
- Mobile devices

## 🔮 Future Enhancements

Potential improvements for future versions:

- Local storage persistence
- Drag and drop task reordering
- Task editing functionality
- Categories or tags for tasks
- Due dates and reminders
- Export/import functionality

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 Code Quality

This project follows best practices including:

- TypeScript strict mode
- ESLint configuration
- Component decomposition
- Custom hooks usage
- Proper prop typing
- Clean code principles
