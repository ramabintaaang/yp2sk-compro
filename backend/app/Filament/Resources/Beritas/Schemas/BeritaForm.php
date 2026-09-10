<?php

namespace App\Filament\Resources\Beritas\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\RichEditor;
use Filament\Schemas\Schema;

class BeritaForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->required()
                    ->live(onBlur: true)
                    ->afterStateUpdated(fn ($state, callable $set) => $set('slug', str($state)->slug())),
                TextInput::make('slug')
                    ->required()
                    ->unique(ignoreRecord: true),
                Select::make('category')
                    ->options([
                        'Prestasi' => 'Prestasi',
                        'Kegiatan' => 'Kegiatan',
                        'Opini' => 'Opini',
                    ])
                    ->required(),
                FileUpload::make('image_path')
                    ->image()
                    ->directory('berita')
                    ->disk('public'),
                Textarea::make('description')
                    ->rows(3)
                    ->columnSpanFull(),
                RichEditor::make('content')
                    ->columnSpanFull()
                    ->required(),
            ]);
    }
}
