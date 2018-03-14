// @flow

import * as React from "react";
import { Col, Row, Card } from "antd";
import moment from "moment";

type Props = {
  leg: Object
};

const formatDate = dateTime => moment(dateTime).format("dd MMM D");

const Leg = ({ leg }: Props) => (
  <Card
    title={`${formatDate(leg.departure.time)} - ${formatDate(
      leg.departure.time
    )}`}
    className={`card`}
  >
    <Row type="flex" justify="start" gutter={16}>
      <Col>
        <Row>
          <div>{moment.utc(leg.departure.time).format("HH:mm")}</div>
        </Row>
        <Row>
          <div>{moment.utc(leg.arrival.time).format("HH:mm")}</div>
        </Row>
      </Col>
      <Col>
        <Row>
          <div>{leg.departure.airport.name}</div>
        </Row>
        <Row>
          <div>{leg.arrival.airport.name}</div>
        </Row>
      </Col>
    </Row>
  </Card>
);

export default Leg;