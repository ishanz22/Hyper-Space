import { useRouter } from 'next/navigation';

interface PopupProps {
  onClose: () => void;
}

export default function Popup({ onClose }: PopupProps) {
  const router = useRouter();

  const navigateToAnotherPage = () => {
    router.push('/another-page');
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="absolute inset-0 bg-opacity-50 backdrop-filter backdrop-blur-sm"></div>
      <div className="bg-white p-8 rounded shadow-lg relative z-10">
        <h2 className="text-2xl font-bold mb-4 text-black">Popup to get the job</h2>
        <p className="text-black">Please hire me 🥺</p>
        <button
          className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out"
          onClick={navigateToAnotherPage}
        >
          Let's Work Together!
        </button>
      </div>
    </div>
  );
}
