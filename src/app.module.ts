import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExperimentModule } from './experiment/experiment.module';
import { ResultModule } from './result/result.module';
import { AttemptModule } from './attempt/attempt.module';
import { UserModule } from './user/user.module';
import { PatientModule } from './patient/patient.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ExperimentModule,
    ResultModule,
    AttemptModule,
    UserModule,
    PatientModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
