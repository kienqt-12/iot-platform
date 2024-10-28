import { Module } from '@nestjs/common';
import { LocationService } from './location.service';
import { LocationController } from './location.controller';
import { PrismaService } from 'src/prisma.service';
import { AwsS3Service } from 'src/s3/aws-s3.service';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule],
  controllers: [LocationController],
  providers: [LocationService, PrismaService, AwsS3Service],
  exports: [LocationService],
})
export class LocationModule {}
