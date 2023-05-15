import { Kafka } from "kafkajs";

const kafka = new Kafka({
  brokers: ['special-chamois-11689-us1-kafka.upstash.io:9092'],
  sasl: {
    mechanism: 'scram-sha-256',
    username: 'c3BlY2lhbC1jaGFtb2lzLTExNjg5JAa-2Rt2y-KrzBalb-cAZET3Bvf-plt8ObQ',
    password: '95ca6d725010498788cba4e77eaf2060',
  },
  ssl: true,
})

export { kafka };
