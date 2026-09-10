<?php

namespace App\Filament\Resources\Galeris\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;

class GaleriForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->required(),
                Select::make('category')
                    ->options([
                        'Kegiatan Siswa' => 'Kegiatan Siswa',
                        'Fasilitas' => 'Fasilitas',
                        'Lingkungan' => 'Lingkungan',
                        'Olahraga' => 'Olahraga',
                        'Seni & Budaya' => 'Seni & Budaya',
                        'Akademik' => 'Akademik',
                    ])
                    ->required(),
                FileUpload::make('image_path')
                    ->image()
                    ->directory('galeri')
                    ->disk('public')
                    ->required(),
                Textarea::make('description')
                    ->rows(3)
                    ->columnSpanFull(),
            ]);
    }
}
