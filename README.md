# KML Innovate website

Company website for KML Innovate Ltd: a single-page site presenting the company, its services and products, the team, client logos and testimonials.

## Stack

- React 18 + Vite
- Tailwind CSS
- react-text-transition for animated hero text

## Structure

- `src/components/`: Header, MainSection, AboutUsSection, ServicesSection, ProductSection and ProductCard, Team and Person, ClientLogoSection, Testimonials, Footer
- `src/data/index.js`: site content (services, products, team, testimonials) kept apart from the markup

## Running

```bash
yarn
yarn dev      # development server
yarn build    # production build into dist/
yarn preview  # serve the build
```
