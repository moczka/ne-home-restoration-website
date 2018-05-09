import React from 'react';
import {PageHeader, Grid, Col, Row} from 'react-bootstrap';
import Card from '_components/Card/Card';
import {Block} from '_components/Grid/Grid';
import {SectionCard} from '_components/Page/Page';
import Showcase from '_container/Showcase/Showcase_container';
import ContactForm from '_components/ContactForm/ContactForm';
import CustomerReview from '_components/CustomerReview/CustomerReview'
import ImageComponent from '_components/Image/Image';

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
const previews = [
  {
    src: 'assets/previews/kitchens_preview.png',
    name: 'Kitchens'
  },
  {
    src: 'assets/previews/basement_preview.jpg',
    name: 'Basements'
  },
  {
    src: 'assets/previews/bathrooms_preview.png',
    name: 'Bathrooms'
  },
  {
    src: 'assets/previews/decks_preview.png',
    name: 'Decks'
  },
];

const HomePage = props => {
  const {photos, about, showcasePhotos, reviews} = props;
  return (
    <div className="HomePage">
      <Showcase resolution="medium" showCaption={false}/>
      <SectionCard title="Our Story" textAlign="center" separated titleAlign="center" icon="glyphicon glyphicon-book">
        <Grid>
          <Row>
            <Col xs={12} sm={6} md={6}>
              <Block mt={8} mb={8}>
                <ImageComponent withBorder src={ANDRE_PHOTO} />
              </Block>
            </Col>
            <Col xs={12} sm={6} md={6}>
              <p>{about.owner.background}</p>
            </Col>
          </Row>
        </Grid>
      </SectionCard>
      <SectionCard title="Trusted Brands" titleAlign="center" separated textAlign="center" icon="glyphicon glyphicon-grain">
        <Grid>
          <Row>
            <Col xs={12}>
              <p style={{['marginBottom']: 16}}>We use only the highest quality materials in our projects</p>
            </Col>
            {brands.map(brand => (
              <Col key={brand.name} xs={6} md={3}>
                <ImageComponent src={brand.src} alt={brand.name} />
              </Col>
            ))}
          </Row>
        </Grid>
      </SectionCard>
      <SectionCard title="Our Work" titleAlign="center" separated textAlign="center" icon="glyphicon glyphicon-wrench">
        <Grid>
          <Row>
            <Col xs={12}>
              <p style={{['marginBottom']: 16}}>Transforming an undecorated room into a stylish space, this is what we are specializing in. We can change every old, teary space in your house into a lavish sanctuary. We can guide you through the design process and help ensure the vision of your new space is achieved. Every room in your house will be made to feel like a comfortable, safe haven.</p>
            </Col>
            {previews.map(brand => (
              <Col key={brand.name} xs={6} md={3}>
                <Block mt={8} mb={8}>
                  <Card image={<ImageComponent expand src={brand.src} alt={brand.name} />} target="/gallery" description={brand.name} />
                </Block>
              </Col>
            ))}
          </Row>
        </Grid>
      </SectionCard>
      <SectionCard title="Testimonials" titleAlign="center" separated textAlign="left" icon="glyphicon glyphicon-user">
        <Grid>
          <Row>
            {reviews.map(review => (
              <Col key={review.id} xs={6} md={3}>
                <CustomerReview  {...review}/>
              </Col>
            ))}
          </Row>
        </Grid>
      </SectionCard>
    </div>
  );
}

export default HomePage;