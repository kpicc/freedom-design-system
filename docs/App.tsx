import {
  Badge,
  Button,
  Card,
  Icon,
  iconNames,
  Input,
  PlanCard,
  Stack,
  Text,
} from '../src';
import '../src/tokens/tokens.css';
import './docs.css';

export function App() {
  return (
    <div className="docs">
      <header className="docs-header">
        <h1>Freedom Mobile Design System</h1>
        <p>Tokens and components derived from freedommobile.ca</p>
      </header>

      <section>
        <h2>Colours</h2>
        <div className="docs-swatches">
          <Swatch name="Brand 500" css="--fm-color-brand-500" hex="#DB5C05" />
          <Swatch name="Brand 400" css="--fm-color-brand-400" hex="#ED6B1F" />
          <Swatch name="Brand 600" css="--fm-color-brand-600" hex="#C35500" />
          <Swatch name="Navy 900" css="--fm-color-navy-900" hex="#012F4C" />
          <Swatch name="Navy 500 (link)" css="--fm-color-navy-500" hex="#156BA3" />
          <Swatch name="Gray 800" css="--fm-color-gray-800" hex="#4E4E4E" />
          <Swatch name="Gray 400" css="--fm-color-gray-400" hex="#DEDEDE" />
          <Swatch name="Gray 200" css="--fm-color-gray-200" hex="#F2F2F2" />
          <Swatch name="White" css="--fm-color-white" hex="#FFFFFF" />
          <Swatch name="Black" css="--fm-color-black" hex="#000000" />
        </div>
      </section>

      <section>
        <h2>Typography</h2>
        <p className="docs-type-note">Ambra Sans Text · responsive scale, mobile → desktop</p>
        <Stack gap={6}>
          <div>
            <Text variant="h1">H1 — Nationwide coverage you can count on</Text>
            <p className="docs-type-spec">Medium · 48px → 64px · Hero titles</p>
          </div>
          <div>
            <Text variant="h2">H2 — Google Pixel 11</Text>
            <p className="docs-type-spec">Medium · 32px → 48px · Section titles</p>
          </div>
          <div>
            <Text variant="h3">H3 — $5/mo.</Text>
            <p className="docs-type-spec">Medium · 24px → 32px · Prices, supporting titles</p>
          </div>
          <div>
            <Text variant="h4">H4 — Trade. Save. Enjoy.</Text>
            <p className="docs-type-spec">Medium · 18px → 24px · Subtitles</p>
          </div>
          <div>
            <Text variant="eyebrow">H5 Eyebrow — Overline Label</Text>
            <p className="docs-type-spec">Medium · All caps · 10% tracking · 18px → 24px · Labels</p>
          </div>
          <div>
            <Text variant="body">Body — Freedom provides coverage across 99% of the Canadian population.</Text>
            <p className="docs-type-spec">Regular · 14px → 16px · Paragraph copy</p>
          </div>
          <div>
            <Text variant="h6">H6 — Requires 2-year term¹. Conditions apply.</Text>
            <p className="docs-type-spec">Regular · 12px → 14px · Disclaimers, footnotes</p>
          </div>
        </Stack>
      </section>

      <section>
        <h2>Icons</h2>
        <div className="docs-icons">
          {iconNames.map((name) => (
            <div className="docs-icon" key={name}>
              <Icon name={name} size={24} />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Buttons</h2>
        <Stack direction="horizontal" gap={6} align="center">
          <Stack gap={2}>
            <span>Desktop — 16px</span>
            <Button platform="desktop">Shop all plans</Button>
            <Button variant="secondary" platform="desktop">Learn more</Button>
          </Stack>
          <Stack gap={2}>
            <span>Mobile — 14px</span>
            <Button platform="mobile">Shop all plans</Button>
            <Button variant="secondary" platform="mobile">Learn more</Button>
          </Stack>
        </Stack>
      </section>

      <section>
        <h2>Inputs</h2>
        <div className="docs-narrow">
          <Stack gap={4}>
            <Stack gap={2}>
              <span>Default</span>
              <Input label="Phone number" placeholder="(___) ___-____" />
            </Stack>
            <Stack gap={2}>
              <span>Filled</span>
              <Input
                label="Postal code"
                defaultValue="M5V 2T6"
              />
            </Stack>
            <Stack gap={2}>
              <span>Error</span>
              <Input
                label="Account PIN"
                error="PIN must be 4 digits."
                defaultValue="12"
              />
            </Stack>
          </Stack>
        </div>
      </section>

      <section>
        <h2>Badges</h2>
        <Stack direction="horizontal" gap={2}>
          <Badge variant="promo">Special offer</Badge>
          <Badge variant="info">5G+</Badge>
          <Badge variant="success">Price Freeze Promise</Badge>
          <Badge variant="neutral">Certified pre-owned</Badge>
        </Stack>
      </section>

      <section>
        <h2>Cards</h2>
        <Stack direction="horizontal" gap={4}>
          <Card elevation="none">No elevation</Card>
          <Card elevation="small">Small elevation</Card>
        </Stack>
      </section>

      <section>
        <h2>Plan cards</h2>
        <div className="docs-plans">
          <PlanCard
            planTag="Total Freedom plan"
            promoFlag="Black Friday Offer!"
            dataAllowance="35GB"
            speedBadge="5G⁵"
            price="35"
            priceFootnote="2"
            qualifier="with Digital Discount"
            regionTitle="Canada & Roam Beyond"
            priceFreeze
            features={[
              <>
                <strong>10GB + 25GB bonus<sup>14</sup> data in Canada-U.S.-Mexico.</strong>{' '}
                Unlimited data at reduced speeds
                thereafter<sup>4</sup>
              </>,
              <>
                <strong>1GB data</strong> in 120+ Roam Beyond global
                destinations<sup>8</sup>
              </>,
              <>
                <strong>Unlimited talk &amp; text</strong> in Canada and 120+
                global destinations
              </>,
            ]}
            ctaLabel="Choose This Plan"
          />
          <PlanCard
            planTag="Total Freedom plan"
            dataAllowance="125GB"
            speedBadge="5G⁵"
            price="30"
            regularPrice="$45/mo."
            qualifier="with Digital Discount and 3rd+ line offer"
            regionTitle="Canada & Roam Beyond"
            priceFreeze
            features={[
              <>
                <strong>125GB data</strong> in Canada-U.S.-Mexico. Unlimited
                data at reduced speeds thereafter
              </>,
              <>
                <strong>5GB data</strong> in 120+ Roam Beyond global
                destinations
              </>,
              <>
                <strong>Unlimited talk &amp; text</strong> in Canada and 120+
                global destinations
              </>,
            ]}
            ctaLabel="Choose This Plan"
          />
        </div>
      </section>
    </div>
  );
}

function Swatch({ name, css, hex }: { name: string; css: string; hex: string }) {
  return (
    <div className="docs-swatch">
      <div
        className="docs-swatch-color"
        style={{ backgroundColor: `var(${css})` }}
      />
      <span>{name}</span>
      <code>{hex}</code>
      <code>var({css})</code>
    </div>
  );
}
