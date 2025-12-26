import { Container } from "./ui/container";

const logos = [
  { name: "Netflix", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Meta", url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
  { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
];

export function LogoMarquee() {
  return (
    <section className="py-16 border-y border-border">
      <Container>
        <p className="text-center text-muted-foreground text-sm mb-8">
          Trusted by big industries
        </p>
      </Container>
      
      <div className="relative fade-mask overflow-hidden">
        <div className="flex gap-16 items-center marquee whitespace-nowrap">
          {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo.url}
              alt={logo.name}
              className="h-8 w-auto opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
