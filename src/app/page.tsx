import ActiveLabel from '@/app/components/active-label';
import NotActiveLabel from '@/app/components/not-active-label';
import StatusLabel, { Status } from '@/app/components/status-label';
import AddCompanyButton from "@/app/components/add-company-button";
import MagicButton from "@/app/components/magic-button";

export default function Home() {
    return (
      <main>
          <h1 className={'text-3xl'}>Home page</h1>
          <ActiveLabel>Active</ActiveLabel>
          <NotActiveLabel>Not Active</NotActiveLabel>
          <p>Tailwind</p>
          <StatusLabel status={Status.Active}>Active</StatusLabel>
          <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
          <StatusLabel status={Status.Pending}>Pending</StatusLabel>
          <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
          <AddCompanyButton/>
          <MagicButton />
      </main>
  );
}
