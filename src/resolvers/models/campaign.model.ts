import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'campaign' })
export class Campaign {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => Int)
  id: number;

  @Field()
  campaign_address: string;

  @Field()
  campaign_owner: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => Float)
  totalDonations: number;

  @Field()
  createdAt: Date;
}
