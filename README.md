# my-website

Personal portfolio/resume site for John Doomy, a web developer based in Denver, CO. Single-page
scrolling layout — Home, About, Portfolio, Connect — showcasing three projects: AWD Estimator, Recipe.AI, and
StrongLifts, with links to email, GitHub, and LinkedIn.

## Tech Stack

- React 18
- Tailwind CSS
- react-icons

No backend, no data fetching — fully static.

## Project Structure

- `src/App.js` — top-level layout, renders all page sections
- `src/components/` — reusable UI: nav (`Header2`/`Sidebar`), `Footer`, `Button`, `PortfolioCard`, `TypeWriter`
- `src/pages/` — page sections rendered by `App.js`: `Home3`, `About3`, `Portfolio2`, `Connect`
- `src/hooks/` — custom hooks (`useOnScreen`)
- `src/images/` — portfolio screenshot assets
