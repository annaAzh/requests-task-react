import { RequestForm } from '@/entities/request';

export const RequestNewPage = () => {
  return (
    <>
      <h1 className="mb-4 text-2xl">Новая заявка</h1>
      <RequestForm />
    </>
  );
};
