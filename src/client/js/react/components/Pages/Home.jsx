import React from 'react';
import {PageHeader, Grid, Col, Row} from 'react-bootstrap';
import Card from '_components/Card/Card';
import {SectionCard} from '_components/Page/Page';
import Slideshow from '_components/Slideshow/Slideshow';
import ContactForm from '_components/ContactForm/ContactForm';
import ImageComponent from '_components/Image/Image';

const showCaseHeight = 400;
const ANDRE_PHOTO = 'assets/ne-home-restoration-owner.png';
const brands = [
  {
    src: 'assets/brands/buildclean_dust_brand.png',
    name: 'BuildClean Dust Control HEPA'
  },
  {
    src: 'assets/brands/edgewood_brand.png',
    name: 'Edgewood Brand'
  },
  {
    src: 'assets/brands/kohler_brand.png',
    name: 'Kohler Fixtures'
  },
  {
    src: 'assets/brands/wedi_brand.png',
    name: 'Wedi Remodeling Brand'
  }
];

const HomePage = props => {
  const {photos, about, stockPhotos} = props;
  return (
    <div className="HomePage">
      <Slideshow photos={photos} showCaption={false} height={showCaseHeight} />
      <SectionCard title="Our Story" textAlign="center" separated titleAlign="center" icon="glyphicon glyphicon-book">
        <Grid>
          <Row>
            <Col xs={12} sm={6} md={6}>
              <ImageComponent withBorder src={ANDRE_PHOTO} />
            </Col>
            <Col xs={12} sm={6} md={6}>
              <p>{about.company.background}</p>
            </Col>
          </Row>
        </Grid>
      </SectionCard>
      <SectionCard title="Trusted Brands" titleAlign="center" separated textAlign="center" icon="glyphicon glyphicon-book">
        <Grid>
          <Row>
            {brands.map(brand => (
              <Col key={brand.name} xs={6} md={3}>
                <ImageComponent src={brand.src} alt={brand.name} />
              </Col>
            ))}
          </Row>
        </Grid>
      </SectionCard>
      <SectionCard title="Our Work" titleAlign="center" separated textAlign="center" icon="glyphicon glyphicon-book">
        <Grid>
          <Row>
            <Col xs={12}>
              <p style={{['marginBottom']: 16}}>Transforming an undecorated room into a stylish space, this is what we are specializing in. We can change every old, teary space in your house into a lavish sanctuary. We can guide you through the design process and help ensure the vision of your new space is achieved. Every room in your house will be made to feel like a comfortable, safe haven.</p>
            </Col>
            {brands.map(brand => (
              <Col key={brand.name} xs={6} md={3}>
                <Card image={<ImageComponent src={brand.src} alt={brand.name} />} target="#hello" description="dfdfdfdf" />
              </Col>
            ))}
          </Row>
        </Grid>
      </SectionCard>
    </div>
  );
}

export default HomePage;