import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudModule } from './-crud/-crud.module';
import { TalksController } from './talks/talks.controller';

@Module({
  imports: [CrudModule],
  controllers: [AppController, TalksController],
  providers: [AppService],
})
export class AppModule {}
