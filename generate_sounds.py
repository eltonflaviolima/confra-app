import wave
import math
import struct
import random
import os

SAMPLE_RATE = 44100

def write_wav(filename, samples):
    filepath = os.path.join('sounds', filename)
    with wave.open(filepath, 'w') as wav_file:
        nchannels = 1
        sampwidth = 2
        framerate = SAMPLE_RATE
        nframes = len(samples)
        comptype = "NONE"
        compname = "not compressed"
        wav_file.setparams((nchannels, sampwidth, framerate, nframes, comptype, compname))
        
        # Clamp samples to 16-bit signed integer range
        raw_data = bytearray()
        for s in samples:
            val = max(-32767, min(32767, int(s * 32767)))
            raw_data.extend(struct.pack('<h', val))
        wav_file.writeframes(raw_data)
    print(f"Generated {filepath} ({len(samples)/SAMPLE_RATE:.2f}s)")

# 1. Countdown (5, 4, 3, 2, 1, 0) - 5 seconds
def gen_countdown():
    samples = []
    # 5 pulses: at 0s, 1s, 2s, 3s, 4s (880Hz), then final burst at 5s (1760Hz)
    for sec in range(5):
        freq = 880
        dur_beep = 0.2
        dur_silence = 0.8
        for i in range(int(SAMPLE_RATE * dur_beep)):
            t = i / SAMPLE_RATE
            env = math.exp(-t * 8)
            s = math.sin(2 * math.pi * freq * t) * env * 0.7
            samples.append(s)
        for _ in range(int(SAMPLE_RATE * dur_silence)):
            samples.append(0.0)
            
    # Final GO / End beep (1760Hz, 0.7s)
    for i in range(int(SAMPLE_RATE * 0.7)):
        t = i / SAMPLE_RATE
        env = math.exp(-t * 3)
        s = (math.sin(2 * math.pi * 1760 * t) + 0.3 * math.sin(2 * math.pi * 3520 * t)) * env * 0.8
        samples.append(s)
    write_wav('countdown.wav', samples)

# 2. Whistle (Apito de árbitro)
def gen_whistle():
    samples = []
    dur = 0.6
    for i in range(int(SAMPLE_RATE * dur)):
        t = i / SAMPLE_RATE
        # Modulation between 2300 and 2600 Hz
        trill = math.sin(2 * math.pi * 35 * t) * 200
        freq = 2450 + trill
        env = 1.0
        if t < 0.05:
            env = t / 0.05
        elif t > 0.45:
            env = max(0.0, (dur - t) / 0.15)
        # Add white noise for breathy whistle texture
        noise = (random.random() * 2 - 1) * 0.15
        s = (math.sin(2 * math.pi * freq * t) + noise) * env * 0.75
        samples.append(s)
    write_wav('whistle.wav', samples)

# 3. Buzzer (Tempo Esgotado / Alarme)
def gen_buzzer():
    samples = []
    dur = 0.9
    for i in range(int(SAMPLE_RATE * dur)):
        t = i / SAMPLE_RATE
        env = 1.0 if t < 0.7 else max(0.0, (dur - t) / 0.2)
        # Harsh square / sawtooth combination around 180Hz
        freq = 180
        s = 0.0
        for harmonic in range(1, 15, 2):
            s += (1.0 / harmonic) * math.sin(2 * math.pi * freq * harmonic * t)
        s = s * env * 0.5
        samples.append(s)
    write_wav('buzzer.wav', samples)

# 4. Victory / Fanfarra
def gen_victory():
    samples = []
    notes = [523.25, 659.25, 783.99, 1046.50, 1318.51] # C5, E5, G5, C6, E6
    dur_note = 0.14
    for note in notes[:-1]:
        for i in range(int(SAMPLE_RATE * dur_note)):
            t = i / SAMPLE_RATE
            env = math.exp(-t * 6)
            s = (math.sin(2 * math.pi * note * t) + 0.4 * math.sin(2 * math.pi * note * 2 * t)) * env * 0.6
            samples.append(s)
    # Long last note
    for i in range(int(SAMPLE_RATE * 0.7)):
        t = i / SAMPLE_RATE
        env = math.exp(-t * 2.5)
        s = (math.sin(2 * math.pi * notes[-1] * t) + 0.4 * math.sin(2 * math.pi * notes[-1] * 2 * t)) * env * 0.7
        samples.append(s)
    write_wav('victory.wav', samples)

# 5. Airhorn (DJ Buzina clássica)
def gen_airhorn():
    samples = []
    # 3 short blasts + 1 long
    blasts = [(0.12, 0.05), (0.12, 0.05), (0.12, 0.05), (0.5, 0.0)]
    for blast_dur, silence_dur in blasts:
        for i in range(int(SAMPLE_RATE * blast_dur)):
            t = i / SAMPLE_RATE
            env = 1.0 if t < blast_dur - 0.03 else (blast_dur - t) / 0.03
            freq = 466.16 # Bb4
            s = math.sin(2 * math.pi * freq * t) + 0.6 * math.sin(2 * math.pi * freq * 1.5 * t) + 0.3 * math.sin(2 * math.pi * freq * 2 * t)
            samples.append(s * env * 0.6)
        for _ in range(int(SAMPLE_RATE * silence_dur)):
            samples.append(0.0)
    write_wav('airhorn.wav', samples)

# 6. Drumroll (Rufem os tambores)
def gen_drumroll():
    samples = []
    dur = 2.2
    for i in range(int(SAMPLE_RATE * dur)):
        t = i / SAMPLE_RATE
        # Snare rattle noise with amplitude modulation accelerating
        vol = (t / dur) * 0.7
        mod = math.sin(2 * math.pi * (20 + t * 15) * t)
        noise = (random.random() * 2 - 1) * vol * (0.6 + 0.4 * mod)
        s = noise + math.sin(2 * math.pi * 120 * t) * vol * 0.3
        samples.append(s)
    # Crash cymbal at the end
    crash_dur = 0.8
    for i in range(int(SAMPLE_RATE * crash_dur)):
        t = i / SAMPLE_RATE
        env = math.exp(-t * 5)
        noise = (random.random() * 2 - 1) * env * 0.8
        samples.append(noise)
    write_wav('drumroll.wav', samples)

# 7. Sad Trombone (Errou / Wah wah wah waah)
def gen_trombone():
    samples = []
    notes = [466.16, 440.0, 415.30, 392.0] # Bb4, A4, Ab4, G4
    dur_note = 0.35
    for note in notes[:-1]:
        for i in range(int(SAMPLE_RATE * dur_note)):
            t = i / SAMPLE_RATE
            env = math.sin(math.pi * (t / dur_note))
            vibrato = math.sin(2 * math.pi * 8 * t) * 6
            freq = note + vibrato
            s = (math.sin(2 * math.pi * freq * t) + 0.4 * math.sin(2 * math.pi * freq * 2 * t)) * env * 0.6
            samples.append(s)
    # Final sagging note
    final_dur = 0.9
    for i in range(int(SAMPLE_RATE * final_dur)):
        t = i / SAMPLE_RATE
        env = math.exp(-t * 2)
        sag = 392.0 - (t * 40)
        vibrato = math.sin(2 * math.pi * 6 * t) * 10
        freq = sag + vibrato
        s = (math.sin(2 * math.pi * freq * t) + 0.4 * math.sin(2 * math.pi * freq * 2 * t)) * env * 0.7
        samples.append(s)
    write_wav('errou.wav', samples)

# 8. Applause (Palmas da galera)
def gen_applause():
    samples = []
    dur = 2.0
    for i in range(int(SAMPLE_RATE * dur)):
        t = i / SAMPLE_RATE
        env = 1.0 if t < 1.4 else (dur - t) / 0.6
        # Dense random clicks / clapping bursts
        clap = 0.0
        if random.random() < 0.12:
            clap = (random.random() * 2 - 1) * 0.9
        noise = (random.random() * 2 - 1) * 0.25
        samples.append((clap + noise) * env * 0.8)
    write_wav('applause.wav', samples)

# 9. Tension (Batimento Cardíaco / Tensão)
def gen_tension():
    samples = []
    dur = 2.5
    beats = [0.0, 0.2, 0.7, 0.9, 1.4, 1.6, 2.0, 2.2]
    total_samples = int(SAMPLE_RATE * dur)
    buf = [0.0] * total_samples
    for beat in beats:
        start_idx = int(beat * SAMPLE_RATE)
        beat_len = int(SAMPLE_RATE * 0.12)
        for i in range(beat_len):
            idx = start_idx + i
            if idx < total_samples:
                t = i / SAMPLE_RATE
                env = math.exp(-t * 25)
                buf[idx] += math.sin(2 * math.pi * 65 * t) * env * 0.8
    write_wav('tension.wav', buf)

if __name__ == '__main__':
    gen_countdown()
    gen_whistle()
    gen_buzzer()
    gen_victory()
    gen_airhorn()
    gen_drumroll()
    gen_trombone()
    gen_applause()
    gen_tension()
    print("All sounds generated successfully in sounds/!")
