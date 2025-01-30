import { cn } from '@/lib/utils';
import { CallControls, CallParticipantsList, PaginatedGridLayout, SpeakerLayout } from '@stream-io/video-react-sdk';
import React, { useState } from 'react'

type CallLayoutType = 'grid' | 'speaker-left' | 'spearker-right';

const MeetingRoom = () => {

  const [layout, setLayout] = useState<CallLayoutType>('speaker-left');
  const [showParticipants, setShowParticipants] = useState(false);

  const CallLayout = () => {
    switch(layout){
      case 'grid':
        return <PaginatedGridLayout />
      case 'spearker-right':
        return <SpeakerLayout participantsBarPosition="left" />
      default:
        return <SpeakerLayout participantsBarPosition="right" />
    }
  }
  return (
    <section className='relative h-screen w-full overflow-hidden pt-4 text-white'>
      <div className='relative flex-center size-full'>
        <div className='flex size-full items-center max-w-[1000px]'>
          <CallLayout />
        </div>
        <div className={cn('h-[calc(100vh-86px)] hidden ml-2', { 'show-block': showParticipants })}>
          <CallParticipantsList onClose={() => setShowParticipants(false)} />
        </div>
      </div>

      <div className='fixe-center bottom-0 flex w-full gap-5'>
        <CallControls />
      </div>
    </section>
  )
}

export default MeetingRoom