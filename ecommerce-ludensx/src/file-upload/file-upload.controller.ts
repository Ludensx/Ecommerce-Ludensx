import { Body, Controller, FileTypeValidator, HttpCode, HttpStatus, MaxFileSizeValidator, Param, ParseFilePipe, ParseFilePipeBuilder, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from 'src/auth/guards/authGuard';

@Controller('files')
export class FileUploadController {
  constructor(private readonly fileUploadService: FileUploadService) { }

  @Post('uploadimage/:id')
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@Param('id') id: string, @UploadedFile(
    new ParseFilePipe({
      validators: [
        new MaxFileSizeValidator({ maxSize: 200000, message: 'Max file size is 200kb' }),
        new FileTypeValidator({ fileType: /(jpg|jpeg|png)$/})

      ],
    })
  ) file: Express.Multer.File) {
    return this.fileUploadService.uploadProductImage(id, file);
  }
}