import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import { formatPrice, pluralize, isNewShoe } from '../../utils';
import Spacer from '../Spacer';

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

  const flagLabels = {
    'on-sale': {
      text: 'Sale',
      type: SaleFlag,
      },
    'new-release': {
      text: 'Just Released!',
      type: JustReleasedFlag
      },
    'default': {
      text: '',
      type: null
    }
  }

  const FlagType = flagLabels[variant].type;
  const OriginalPrice = variant === 'on-sale' ? OriginalPriceOnSale : Price;

  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <ImageWrapper>
          { FlagType && <FlagType>{flagLabels[variant].text}</FlagType>}
          <Image alt="" src={imageSrc} />
        </ImageWrapper>
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          <OriginalPrice>{formatPrice(price)}</OriginalPrice>
        </Row>
        <Row>
          <ColorInfo>{pluralize('Color', numOfColors)}</ColorInfo>
          { variant === 'on-sale' && <SalePrice>{formatPrice(salePrice)}</SalePrice> }
        </Row>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.article``;

const ImageWrapper = styled.div`
  position: relative;
`;

const Flag = styled.div`
  background-color: var(--background-color);
  border-radius: 2px;
  position: absolute;
  right: -4px;
  top: 12px;
  color: ${COLORS.white};
  font-weight: 700;
  font-size: ${14 / 16}rem;
  padding: 7px 9px 9px 11px;
`;

const JustReleasedFlag = styled(Flag)`
  background-color: ${COLORS.secondary};
`;

const SaleFlag = styled(Flag)`
  background-color: ${COLORS.primary};
`;

const Image = styled.img`
  width: 100%;
`;

const Row = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
  display: inline;
`;

const Price = styled.span``;

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`;

const OriginalPriceOnSale = styled(Price)`
  color: ${COLORS.gray[700]};
  text-decoration: line-through;
`;

export default ShoeCard;
