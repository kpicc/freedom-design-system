import { ReactNode } from 'react';
import { Icon } from '../Icon';
import './PlanCard.css';

export interface PlanCardProps {
  promoFlag?: string;
  /** Plan type pill in the navy header, e.g. "Total Freedom plan" */
  planTag?: string;
  /** Headline data allowance, e.g. "35GB" */
  dataAllowance: string;
  /** Speed badge next to the allowance, e.g. "5G⁵" */
  speedBadge?: string;
  /** Monthly price in dollars, e.g. "35" — rendered as "$35/mo." */
  price: string;
  /** Footnote marker on the price, e.g. "2" */
  priceFootnote?: string;
  /** Line under the price, e.g. "with Digital Discount" */
  qualifier?: string;
  /** Regular price shown struck through, e.g. "$45/mo." */
  regularPrice?: string;
  /** Coverage section heading, e.g. "Canada & Roam Beyond" */
  regionTitle?: string;
  /** Checkmark items; pass JSX to mix bold lead-ins and footnote sups */
  features?: ReactNode[];
  /** Navy banner with watch icon, e.g. "Watch plan & Phone Protection add-on included" */
  addonBanner?: string;
  /** Renders the navy "Price Freeze Promise" banner */
  priceFreeze?: boolean;
  /** Legal footnote, e.g. "Requires 2-year term¹. Conditions apply." */
  conditions?: string;
  /** CTA label, e.g. "Choose This Plan" */
  ctaLabel?: string;
  onCtaClick?: () => void;
  children?: ReactNode;
}

export function PlanCard({
  promoFlag,
  planTag,
  dataAllowance,
  speedBadge,
  price,
  priceFootnote,
  qualifier,
  regularPrice,
  regionTitle,
  features,
  addonBanner,
  priceFreeze = false,
  conditions,
  ctaLabel,
  onCtaClick,
  children,
}: PlanCardProps) {
  return (
    <div className="fm-plan-card-wrapper">
      {promoFlag && <div className="fm-plan-card-promo">{promoFlag}</div>}
      <div className="fm-plan-card">
      <div className="fm-plan-card-header">
        {planTag && <span className="fm-plan-card-tag">{planTag}</span>}
        <div className="fm-plan-card-allowance">
          <span className="fm-plan-card-data">{dataAllowance}</span>
          {speedBadge && (
            <span className="fm-plan-card-speed">{speedBadge}</span>
          )}
        </div>
        <div className="fm-plan-card-pricing">
          <span className="fm-plan-card-price">
            <span className="fm-plan-card-currency">$</span>
            {price}
            <span className="fm-plan-card-price-unit">/mo.</span>
            {priceFootnote && <sup>{priceFootnote}</sup>}
          </span>
          {regularPrice && (
            <span className="fm-plan-card-regular">Reg. {regularPrice}</span>
          )}
        </div>
        {qualifier && (
          <p className="fm-plan-card-qualifier">
            {qualifier}
            <Icon name="info" size={16} />
          </p>
        )}
      </div>

      <div className="fm-plan-card-body">
        {regionTitle && (
          <p className="fm-plan-card-region">
            <Icon name="phone" size={18} />
            {regionTitle}
            <Icon name="info" size={16} />
          </p>
        )}

        {features && features.length > 0 && (
          <ul className="fm-plan-card-features">
            {features.map((feature, i) => (
              <li key={i}><span className="fm-plan-card-feature-text">{feature}</span></li>
            ))}
          </ul>
        )}

        {children}

        {addonBanner && (
          <div className="fm-plan-card-freeze fm-plan-card-addon">
            <Icon name="watch" size={40} className="fm-plan-card-addon-icon" />
            <span className="fm-plan-card-freeze-text">
              {addonBanner}
              <Icon name="chevronRight" size={16} />
            </span>
          </div>
        )}

        {priceFreeze && (
          <div className="fm-plan-card-freeze">
            <span className="fm-plan-card-freeze-badge">
              Price
              <br />
              Freeze
            </span>
            <span className="fm-plan-card-freeze-text">
              Plan price is covered by our Price Freeze Promise
              <Icon name="chevronRight" size={16} />
            </span>
          </div>
        )}

        {conditions && <p className="fm-plan-card-conditions">{conditions}</p>}

        {ctaLabel && (
          <button
            type="button"
            className="fm-plan-card-cta"
            onClick={onCtaClick}
          >
            {ctaLabel}
          </button>
        )}
      </div>
      </div>
    </div>
  );
}
