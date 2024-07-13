import React, { useEffect } from 'react';

function ModalConfirmacion({ onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 0);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="max-w-md border rounded-lg bg-white p-5 shadow-lg">
        <div className="flex">
          <div>
            <svg
              className="w-6 h-6 fill-current text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8 8 8-3.59 8 8-3.59 8-8 8z" />
            </svg>
          </div>

          <div className="ml-3">
            <h2 className="font-semibold text-gray-800">Mensaje Enviado</h2>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Tu mensaje ha sido enviado correctamente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalConfirmacion;
