import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudModule } from './-crud/-crud.module';

@Module({
  imports: [CrudModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
