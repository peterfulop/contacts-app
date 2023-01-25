import { TEXT } from '../../../helpers/translate/translate-object';
import styled from '../../../theme/styled';
import { Button } from '../button/button';

import DefaultImage from '../../../assets/avatars/Default.png';
import { translate } from '../../../helpers/translate/translate';

const Uploader = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '1rem',
  margin: '24px 0',
});

const ImageModifier = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

const Avatar = styled('div')(({ theme }) => ({
  img: {
    width: '88px',
    height: '88px',
    borderRadius: '44px',
    objectFit: 'cover',
    border: `1px solid ${theme.colors.G70}`,
  },
}));

type ImageUploaderProps = {
  image: string | null;
  setImage: React.Dispatch<React.SetStateAction<string | null>>;
  setFile: React.Dispatch<React.SetStateAction<FileList | null>>;
};

export const ImageUploader = (props: ImageUploaderProps) => {
  const deleteImage = () => {
    props.setImage(null);
    props.setFile(null);
  };
  return (
    <Uploader>
      <input
        type='file'
        accept='image/*'
        id='image-uploader-input'
        hidden
        onChange={({ target: { files } }) => {
          if (files) {
            props.setImage(URL.createObjectURL(files[0]));
            props.setFile(files);
          }
        }}
      />
      <Avatar>
        <img
          src={props.image || DefaultImage}
          width={200}
          height={200}
          alt={'default'}
        />
      </Avatar>
      {!props.image ? (
        <Button
          type='button'
          variant='FLAT'
          theme='PRIMARY'
          label={translate(TEXT.buttons.addPicture)}
          icon='Add'
          onClick={(e) => {
            document.getElementById('image-uploader-input')?.click();
            e.preventDefault();
          }}
        />
      ) : (
        <ImageModifier>
          <Button
            type='button'
            variant='FLAT'
            theme='PRIMARY'
            label={translate(TEXT.buttons.changePicture)}
            icon='Change'
            onClick={(e) => {
              document.getElementById('image-uploader-input')?.click();
              e.preventDefault();
            }}
          />
          <Button
            type='button'
            variant='FLAT'
            theme='PRIMARY'
            icon='Delete'
            onClick={deleteImage}
          />
        </ImageModifier>
      )}
    </Uploader>
  );
};
